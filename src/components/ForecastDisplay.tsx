
import React from 'react';
import type { ForecastData } from '../types';
import { WeatherIcon } from './icons';

interface ForecastDisplayProps {
    data: ForecastData[];
}

const ForecastCard: React.FC<{ dayData: ForecastData }> = ({ dayData }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center shadow-xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300">
        <p className="font-semibold text-lg">{dayData.day}</p>
        <div className="w-16 h-16 my-2 text-yellow-300">
            <WeatherIcon condition={dayData.condition} />
        </div>
        <p className="text-2xl font-light">{Math.round(dayData.temperature)}&deg;C</p>
        <p className="text-sm text-blue-200 capitalize">{dayData.condition}</p>
    </div>
);

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ data }) => {
    return (
        <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-center">5-Day Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {data.map((day, index) => (
                    <ForecastCard key={index} dayData={day} />
                ))}
            </div>
        </div>
    );
};

export default ForecastDisplay;