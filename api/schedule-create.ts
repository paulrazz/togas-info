// api/schedule-create.ts
// POST â€” Creates a new scheduled campaign job on the server.
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
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { 
        subject, message, theme, senderName, replyTo, customFooter, footerCopyright, footerUnsubscribe,
        customSmtp, recipients, ratePerHour, startHour, endHour, timezone, persistent 
    } = req.body;

    if (!subject || !message || !recipients || !Array.isArray(recipients) || recipients.length === 0) {
        return res.status(400).json({ error: 'Missing required fields: subject, message, recipients[]' });
    }

    const jobId = `job_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const now = new Date().toISOString();

    const sheets = getSheetsClient();

    try {
        // Write one row per recipient into the Sheet
        // Schema: job_id, subject, recipient, status, sent_at, config, to¶»§q«^