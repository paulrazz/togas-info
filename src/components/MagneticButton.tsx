import React, { useRef, useEffect } from 'react';
import './MagneticButton.css';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    onClick,
    href,
    strength = 0.5
}) => {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent | Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = button.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left - rect.width / 2;
            const y = mouseEvent.clientY - rect.top - rect.height / 2;

            positionRef.current = { x: x * strength, y: y * strength };

            if (!rafId.current) {
                rafId.current = requestAnimationFrame(animate);
            }
        };

        const handleMouseLeave = () => {
            positionRef.current = { x: 0, y: 0 };
            if (!rafId.current) {
                rafId.current = requestAnimationFrame(animate);
            }
        };

        const animate = () => {
            if (!button) return;

            const { x, y } = positionRef.current;
            butto¶»§q«^