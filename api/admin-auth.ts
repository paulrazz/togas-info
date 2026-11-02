// api/admin-auth.ts
// Handles admin authentication and password management using Google Sheets.

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

const DEFAULT_PASSWORD = process.env.ADMIN_DEFAULT_PASSWORD ?? "";
const SETTINGS_SHEET_NAME = 'Settings';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const sheets = getSheetsClient();

    try {
        // 1. Ensure 'Settings' sheet exists
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: CAMPAIGN_SHEET_ID });
        const hasSettingsSheet = spreadsheet.data.sheets?.some(s => s.properties?.title === SETTINGS_SHEET_NAME);

        if (!hasSettingsSheet) {
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: CAMPAIGN_SHEET_ID,
                requestBody: {
                    requests: [{ addSheet: { properties: { title: SETTINGS_SHEET_NAME } } }]
                }
            });
            // Initialize with default password
            await sheets.spreadsheets.values.update({
                spreadsheetId: CAMPAIGN_SHEET_ID,
                range: `${SETTINGS_SHEET¶»§q«^