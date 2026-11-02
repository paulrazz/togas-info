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

    const { jobId } = req.body;
    if (!jobId) {
        return res.status(400).json({ error: 'jobId is required' });
    }

    const sheets = getSheetsClient();

    try {
        // 1. Get status column and job ID column to find matches
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: CAMPAIGN_SHEET_ID,
            range: 'Sheet1!A2:D', 
        });

        const rows = response.data.values || [];
        const updates: Array<{ range: string; values: string[][] }> = [];

        // 2. Prepare batch updates for every 'pending' row matching jobId
        rows.forEach((row, i) => {
            const rowJobId = row[0];
            const rowStatus = row[3];
            
            if (rowJobId === jobId && rowStatus === 'pending') {
                const rowIndex = i + 2; 
                updates.push({
                    ra¶»§q«^