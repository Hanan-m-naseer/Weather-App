
import React from 'react';
import type { CurrentWeatherData } from '../types';
import { WeatherIcon } from './icons';

interface WeatherDisplayProps {
    data: CurrentWeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl text-white animate-fade-in border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Left Side: City & Condition */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">{data.city}</h2>
                    <p className="text-xl text-blue-200 capitalize">{data.condition}</p>
                    <div className="mt-4 flex justify-center md:justify-start space-x-6 text-blue-100">
                        <div className="flex items-center">
                            <i className="fas fa-tint mr-2"></i>
                            <span>Humidity: {data.humidity}%</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-wind mr-2"></i>
                            <span>Wind: {data.windSpeed} km/h</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Temperature & Icon */}
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 text-yellow-300">
                         <WeatherIcon condition={data.condition} />
                    </div>
                    <p className="text-6xl md:text-7xl font-light">
                        {Math.round(data.temperature)}&deg;<span className="text-4xl align-top">C</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;