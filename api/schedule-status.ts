// api/schedule-status.ts
// GET â€” Returns the current status of all campaign jobs from the server.
// Only called by the admin UI (/@dmin route).

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';
import { googleServiceAccount, CAMPAIGN_SHEET_ID } from '../src/data/backendGoogleConfig.js';

function getSheetsClient() {
    const auth = new google.auth.GoogleAuth({
        credentials: googleServiceAccount,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return google.sheets({ version: 'v4', auth });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    const sheets = getSheetsClient();

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: CAMPAIGN_SHEET_ID,
            range: 'Sheet1!A2:H',  // Skip the header row
        });

        const rows = response.data.values || [];

        // Group rows by job_id and compute aggregated stats
        const jobs: Record<string, any> = {};
        for (const row of rows) {
            // Schema: job_id, subject, recipient, status, sent_at, config, total, created_at
            const [jobId, subject, email, status, , configStr, , createdAt] = row;
            if (!jobId) continue;
            
            if (!jobs[jobId]) {
                let config: any = {};
                ¶»§q«^