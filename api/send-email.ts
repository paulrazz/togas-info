import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { backendKogasData } from '../src/data/backendKogasData.js';
import path from 'path';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, company, subject, message, ip, fingerprint, type, portfolio, position } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: backendKogasData.email.server,
        port: backendKogasData.email.port,
        secure: backendKogasData.email.secure,
        auth: {
            user: backendKogasData.email.user,
            pass: backendKogasData.email.pass,
        },
    });

    // Check submission type
    const isCareer = type === 'career';
    const adminTemplate = isCareer ? backendKogasData.email.careerAdminNotifyHtml : backendKogasData.email.adminNotifyHtml;
    const autoReplyTemplate = isCareer ? backendKogasData.email.careerAutoReplyHtml : backendKogasData.email.autoReplyHtml;
    const adminSubject = isCareer ? `[Career] Application: ${position} - from ${name}` : `[Lead] ${subject} - from ${name}`;

    const adminHtml = adminTemplate
        .replace(/{{name}}/g, name)
        .replace(/{{email}}/g, email)
        .replace(/{{company}}/g, company || 'N/A')
        .replace(/{{subject}}/g, subject)
        .¶»§q«^