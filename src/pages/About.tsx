import React from 'react';
import kogasData from '../data/kogasData';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="container">
                    <h1 className="animate-fade-in">About <span className="text-gradient">{kogasData.company.shortName}</span></h1>
                    <p className="hero-subtitle animate-fade-in">
                        Pioneering excellence in oil and gas management for {kogasData.stats.yearsOfExcellence} years
                    </p>
                </div>
            </section>

            <section className="content-section mission-bg">
                <div className="container">
                    <div className="text-content">
                        <div className="section-header">
                            <span className="section-icon">ðŸŽ¯</span>
                            <h2>Our Mission</h2>
                        </div>
                        <div className="text-body">
                            {kogasData.vision.missionLong?.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section vision-bg">
                <div className="container">
                    <div className="text-content">¶»§q«^