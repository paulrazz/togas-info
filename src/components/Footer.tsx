import React from 'react';
import { Link } from 'react-router-dom';
import kogasData from '../data/kogasData';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/ft_logo.png" alt="KOgas Logo" style={{ height: '40px' }} />
                        </div>
                        <p className="footer-tagline">
                            {kogasData.vision.statement}
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/teams">Our Team</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Exploration & Production</Link></li>
                            <li><Link to="/services">Ref¶»§q«^