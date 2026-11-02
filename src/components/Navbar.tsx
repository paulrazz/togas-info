import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/hd_logo.png" alt="KOgas Logo" style={{ height: '50px' }} />
                </Link>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                    <li><Link to="/ser¶»§q«^