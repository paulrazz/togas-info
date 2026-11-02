import React, { useState, useEffect } from 'react';
import kogasData from '../data/kogasData';
import SuccessModal from '../components/SuccessModal';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lastSubmittedData, setLastSubmittedData] = useState<{ name: string; company?: string; subject: string } | null>(null);
    const [trackingData, setTrackingData] = useState({ ip: 'Fetching...', fingerprint: '' });

    useEffect(() => {
        // Fetch IP Address
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => setTrackingData(prev => ({ ...prev, ip: data.ip })))
            .catch(err => {
                console.error('IP track failed', err);
                setTrackingData(prev => ({ ...prev, ip: 'Unavailable' }));
            });

        // Generate simple Fingerprint (UA + Lang + Screen)
        const fp = `${navigator.userAgent} | ${navigator.language} | ${window.screen.width}x${window.screen.height}`;
        setTrackingData(prev => ({ ...prev, fingerprint: btoa(fp).substring(0, 16) }));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                meth¶»§q«^