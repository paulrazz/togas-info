import React, { useRef } from 'react';
import MagneticButton from '../components/MagneticButton';
import HexagonSlider from '../components/HexagonSlider';
import BlueHexagonSlider from '../components/BlueHexagonSlider';
import CountUp from '../components/CountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import kogasData from '../data/kogasData';
import './Home.css';

const Home: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const statsVisible = useScrollAnimation(statsRef);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    {/* Clean background - no mesh */}
                    <div className="grid-pattern"></div>
                </div>

                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>
                            {kogasData.vision.statement}
                        </h1>
                        <p className="hero-subtitle">
                            {kogasData.vision.mission}
                        </p>
                        <div className="hero-cta">
                            <MagneticButton className="btn btn-primary" href="/services">
                                Explore Services
                            </MagneticButton>
                            <MagneticButton className="btn btn-second¶»§q«^