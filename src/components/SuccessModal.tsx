import React, { useEffect } from 'react';
import './SuccessModal.css';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    submittedData?: {
        name: string;
        company?: string;
        subject: string;
    };
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, submittedData }) => {
    const firstName = submittedData?.name.split(' ')[0] || "there";
    const companyName = submittedData?.company || "your team";

    const getPersonalizedMessage = () => {
        if (!submittedData) return "Your message has been sent successfully. We will be getting in touch with you shortly.";

        const suffix = " Our team will be getting in touch with you shortly to discuss next steps.";

        switch (submittedData.subject) {
            case 'partnership':
                return `We're excited about a potential collaboration with ${companyName}!${suffix}`;
            case 'careers':
                return `We appreciate your interest in joining our team. We'll review your application carefully and get in touch soon.`;
            case 'project':
                return `We've received your project details. We can't wait to discuss how we can help ${companyName}, and we'll reach out very soon.`;
            default:
                return `Thanks for reaching out! We'll get back to you and the team at ${companyName} shortly.`;
        }
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overf¶»§q«^