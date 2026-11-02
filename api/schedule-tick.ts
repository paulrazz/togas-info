// api/schedule-tick.ts
// Called by Google Apps Script every 5 minutes.
// Reads pending rows from the server, checks the time window,
// sends the next batch, and marks them 'sent' or 'failed'.
// 'sent' rows are PERMANENT â€” they are never reset or re-sent.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import path from 'path';
import { googleServiceAccount, CAMPAIGN_SHEET_ID } from '../src/data/backendGoogleConfig.js';
import { backendKogasData } from '../src/data/backendKogasData.js';

function getSheetsClient() {
    const auth = new google.auth.GoogleAuth({
        credentials: googleServiceAccount,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return google.sheets({ version: 'v4', auth });
}

/**
 * Returns true if the current time (in the job's timezone) falls within [startHour, endHour).
 */
function isWithinTimeWindow(startHour: number, endHour: number, timezone: string): boolean {
    try {
        const hourStr = new Date().toLocaleString('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            hour12: false,
        });
        const currentHour = parseInt(hourStr, 10);
        return currentHour >= startHour && currentHour < endHour;
    } catch {
        const h = new Date().getUTCHours();
        return h >= startHour && h < endHour;
    }
}

/**
 * Simple HTML to text converter to provide a fallback part f¶»§q«^