
import React from 'react';

const SunnyIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-7c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zm0 18c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1zm-8-9c.55 0 1 .45 1 1h2c0 .55-.45 1-1 1s-1-.45-1-1H4c0-.55.45-1 1-1zm14 0c.55 0 1 .45 1 1h2c0 .55-.45 1-1 1s-1-.45-1-1h-2c0-.55.45-1 1-1zm-9.9-5.5L7.5 4.9c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0s.39-1.03 0-1.41zm9.9 9.9l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41s1.03-.39 1.41 0zM4.9 6.31c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L4.9 7.72c-.39-.39-.39-1.02 0-1.41zm14.19 8.28l1.41-1.41c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0z" />
    </svg>
);

const CloudyIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-300">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
);

const RainIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-300">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM7 16l-2-2h4l-2 2zm4 2l-2-2h4l-2 2zm4-2l-2-2h4l-2 2z" />
    </svg>
);

const SnowIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
        <path d="M19 13h-2V9h-2v4H5.83l-1.42-1.41L3 13.01l4 4 4-4-1.41-1.42L8.17 13H11v4h2v-4h2.17l-1.41 1.41L15 17.01l4-4-1.41-1.42L16.17 13H19v-2h-2V7h2V5h-2.17l1.41-1.41L17 2.18l-4 4-4-4L7.59 3.59 9 5H7v2h2v4H7V9H5v2h2.17l-1.41 1.41L7 13.82l4-4 4 4 1.41-1.41L15 11h2v2z" />
    </svg>
);

const ThunderstormIcon: React.FC = () => (
     <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-400">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z"/>
    </svg>
);

const DefaultIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
);

export const WeatherIcon: React.FC<{ condition: string }> = ({ condition }) => {
    switch (condition.toLowerCase()) {
        case 'sunny':
        case 'clear':
            return <SunnyIcon />;
        case 'cloudy':
        case 'partly cloudy':
        case 'foggy':
            return <CloudyIcon />;
        case 'rain':
        case 'rainy':
        case 'drizzle':
            return <RainIcon />;
        case 'snow':
        case 'snowy':
            return <SnowIcon />;
        case 'thunderstorm':
            return <ThunderstormIcon />;
        case 'windy':
             return <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-300"><path d="M9.5 15.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm6-11C14.12 4.5 13 5.62 13 7s1.12 2.5 2.5 2.5S18 8.38 18 7s-1.12-2.5-2.5-2.5zM4 9c-1.1 0-2 .9-2 2s.9 2 2 2h1c.55 0 1-.45 1-1V9H4zm13.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H15v-3h2.5zM15 4.5c.83 0 1.5.67 1.5 1.5S15.83 7.5 15 7.5h-3V6h3c0-.83.67-1.5 1.5-1.5z"/></svg>;
        default:
            return <DefaultIcon />;
    }
};
