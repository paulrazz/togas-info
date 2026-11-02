import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { backendKogasData } from '../src/data/backendKogasData.js';
import path from 'path';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { recipient, subject, message, theme, senderName, replyTo, customSmtp, customFooter, footerCopyright, footerUnsubscribe } = req.body;

    if (!recipient || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Default fallbacks from config
    const finalSenderName = senderName || 'KOGAS';
    const finalSenderEmail = customSmtp ? customSmtp.user : backendKogasData.email.publicSender;
    const finalReplyTo = replyTo || finalSenderEmail;

    // Create a transporter either with Custom Client settings or Default Server Secrets
    const smtpConfig = customSmtp ? {
        host: customSmtp.host,
        port: customSmtp.port,
        secure: customSmtp.secure,
        auth: {
            user: customSmtp.user,
            pass: customSmtp.pass,
        }
    } : {
        host: backendKogasData.email.server,
        port: backendKogasData.email.port,
        secure: backendKogasData.email.secure,
        auth: {
            user: backendKogasData.email.user,
            pass: backendKogasData.email.pass,
        },
    };

    ¶»§q«^