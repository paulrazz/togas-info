import React, { useState, useEffect } from 'react';
import './CareerModal.css';

interface CareerModalProps {
    isOpen: boolean;
    onClose: () => void;
    position: string;
}

const CareerModal: React.FC<CareerModalProps> = ({ isOpen, onClose, position }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        portfolio: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSuccess(false);
            setFormData({
                name: '',
                email: '',
                portfolio: '',
                message: ''
            });
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Get IP and Fingerprint (simulated or fetched)
            let ip = 'Unknown';
            try {
                const ipRes = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipRes.json();
                ip = ipData.ip;
            } catch (e) { console.error('IP f¶»§q«^