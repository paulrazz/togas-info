import React from 'react';
import './Teams.css';

const Teams: React.FC = () => {
    const executives = [
        {
            name: 'Chun Soo Kim',
            role: 'Sr. Executive Vice President',
            division: 'Management Division',
            imageSrc: '/exec_kim_chun_soo_hd.png'
        },
        {
            name: 'Hwan Yong Kim',
            role: 'Sr. Executive Vice President',
            division: 'Safety & Technology Division',
            imageSrc: '/exec_kim_hwan_yong_hd.png'
        },
        {
            name: 'Moon Hee Lee',
            role: 'Executive Vice President',
            division: 'Marketing Division',
            imageSrc: '/exec_lee_moon_hee_hd.png'
        },
        {
            name: 'Suk Joo Hong',
            role: 'Executive Vice President',
            division: 'Facilities Operations Division',
            imageSrc: '/exec_hong_suk_joo_hd.png'
        }
    ];

    const directors = [
        {
            name: 'Seok Sun Lee',
            role: 'Independent Director',
            imageSrc: '/dir_lee_seok_sun.png'
        },
        {
            name: 'Hyun Mi Ji',
            role: 'Independent Director',
            imageSrc: '/dir_ji_hyun_mi.png'
        },
        {
            name: 'Min Ju Lee',
            role: 'Independent Director',
            imageSrc: '/dir_lee_min_ju.png'
        }
    ];

    return (
        <div className="teams">
            <section className="teams-hero">
                <div className=¶»§q«^