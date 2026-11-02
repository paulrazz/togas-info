import React, { useState } from 'react';
import './BlueHexagonSlider.css';

interface SlideData {
    id: number;
    title: string;
    description: string;
    label: string[];
    imageSrc: string;
    alt: string;
}

const sliderData: SlideData[] = [
    {
        id: 0,
        label: ['Experience the', 'Promotion Hall'],
        title: 'Natural Gas Promotion Center where you can experience and learn',
        description: "Through various experience programs, we are with you as a fun space where you can experience natural gas in person.",
        imageSrc: '/section3_img_1.png',
        alt: 'Promotion Hall Experience'
    },
    {
        id: 1,
        label: ['Kids', 'KOGAS'],
        title: 'Energy Education for Children',
        description: "KOGAS for children who learn about natural gas and clean energy conveniently and safely anytime, anywhere through fairy tales, cartoons, and videos.",
        imageSrc: '/section3_img_2.png',
        alt: 'Kids Energy Education'
    },
    {
        id: 2,
        label: ['KOGAS', 'Team Squad'],
        title: 'KOGAS Sports Teams',
        description: "Korea Gas Corporation is taking the lead in the development of each region through Taekwondo and basketball teams for the health and sports development of the people.",
        imageSrc: '/section3_img_3.png',
        alt: 'KOGAS Sports Team'
    }
];

const BlueHexagonSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div ¶»§q«^