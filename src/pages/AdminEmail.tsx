import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './AdminEmail.css';

interface AdminConfig {
    publicSender: string;
    recipient: string;
    smtp?: {
        host: string;
        port: number;
        user: string;
        pass: string;
        secure: boolean;
        senderName?: string;
    }
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, maxWidth = '550px' }) => {
    const modalRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            
            // Calculate scrollbar width to prevent layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            
            // Auto-focus first input or button for better keyboard UX
            setTimeout(() => {
                const firstInput = modalRef.current?.querySelector('input, button, textarea') as HTMLElement;
                firstInput?.focus();
            }, 100);
        } else {
            document.bod¶»§q«^