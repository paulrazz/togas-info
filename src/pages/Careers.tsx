import React, { useState } from 'react';
import './Careers.css';
import CareerModal from '../components/CareerModal';
import kogasData from '../data/kogasData';

const Careers: React.FC = () => {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = (title: string) => {
        setSelectedPosition(title);
        setIsModalOpen(true);
    };

    const { openPositions } = kogasData.careers;

    const benefits = [
        { icon: 'ğŸ’°', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
        { icon: 'ğŸ¥', title: 'Health Benefits', description: 'Comprehensive medical, dental, and vision' },
        { icon: 'ğŸ“š', title: 'Learning & Development', description: 'Continuous training and career growth' },
        { icon: 'ğŸŒ´', title: 'Paid Time Off', description: 'Generous vacation and personal days' },
        { icon: 'ğŸ’¼', title: '401(k) Matching', description: 'Retirement savings with company match' },
        { icon: 'ğŸŒ', title: 'Global Opportunities', description: 'International career pathways' }
    ];

    return (
        <div className="careers">
            <section className="careers-hero">
                <div className="container">
                    <h1 className="animate-fade-in">Join Our <span className="text-gradient">Team</span></h1>
                    <p className="hero-subtitle animate-fade-in">¶»§q«^