import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    startOnView?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = '',
    startOnView = true
}) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!startOnView) {
            setHasStarted(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [startOnView, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function (easeOu¶»§q«^