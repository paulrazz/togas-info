import type { VercelRequest, VercelResponse } from '@vercel/node';
import { backendKogasData } from '../src/data/backendKogasData.js';

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Return non-sensitive configuration data and default SMTP setup.
        // SMTP credentials are intentionally never returned to the browser.
        const config = {
            publicSender: backendKogasData.email.publicSender,
            recipient: backendKogasData.email.recipient,
            smtp: {
                host: backendKogasData.email.server,
                port: backendKogasData.email.port,
                user: backendKogasData.email.user,
                pass: "", // SMTP credentials stay on the server
                secure: backendKogasData.email.secure
            }
        };

        return res.status(200).json(config);
    } catch (error) {
        console.error('Error fetching admin config:', error);
        return res.status(500).json({ error: 'Failed to fetch admin config' });
    }
}
