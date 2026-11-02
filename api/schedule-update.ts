// api/schedule-update.ts
// POST â€” Updates the configuration for an existing campaign job.
// Used for on-the-fly adjustments to rate, time window, etc.

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
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { jobId, newConfig } = req.body;
    if (!jobId || !newConfig) {
        return res.status(400).json({ error: 'jobId and newConfig are required' });
    }

    const sheets = getSheetsClient();

    try {
        // 1. Get all rows for this job to find indices
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: CAMPAIGN_SHEET_ID,
            range: 'Sheet1!A2:A', // Only need job ID column to find matches
        });

        const rows = response.data.values || [];
        const updates: Array<{ range: string; values: string[][] }> = [];
        const configJson = JSON.stringify(newConfig);

        // 2. Prepare batch updates for every row matching jobId
        r¶»§q«^