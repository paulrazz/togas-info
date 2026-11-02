import React, { useState } from 'react';
import './HexagonSlider.css';

interface SlideData {
    id: number;
    title: string;
    description: string;
    label: string[];
    imageSrc: string; // The main graphic for the slide
    alt: string;
}

const sliderData: SlideData[] = [
    {
        id: 0,
        label: ['Eco-friendly', 'Hydrogen', 'Energy'],
        title: 'Eco-friendly Hydrogen Energy',
        description: "KOGAS is taking the lead in building hydrogen infrastructure to revitalize Korea's hydrogen economy in line with the trend of the times. Rich yet eco-friendly hydrogen energy while requiring new and renewable energy conversion for carbon neutrality!",
        imageSrc: '/section2_img_h2.png',
        alt: 'Hydrogen Energy Concept'
    },
    {
        id: 1,
        label: ['No. 1 Natural Gas', 'in the World'],
        title: 'No. 1 Natural Gas in the World',
        description: "KOGAS, which supplies clean and economical natural gas safely. Natural gas produces very little smoke or fine particles during combustion and has very low carbon dioxide emissions.",
        imageSrc: '/section2_img_global.png',
        alt: 'Global Natural Gas Network'
    },
    {
        id: 2,
        label: ['Eco-friendly', 'Fuel Conversion'],
        title: 'Eco-friendly Fuel Conversion',
        description: "KOGAS will take the lead in the era of low carbon eco-friendly energy. Various eco-friendly fuel conversion projects such as LNG bunkering and large-sized car proje¶»§q«^