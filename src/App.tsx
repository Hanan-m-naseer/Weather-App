
import React, { useState, useCallback } from 'react';
import type { CurrentWeatherData, ForecastData } from './types';
import { getWeatherDataForCity } from './services/geminiService';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import Loader from './components/Loader';

const App: React.FC = () => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null);
    const [forecast, setForecast] = useState<ForecastData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const handleSearch = useCallback(async (searchCity: string) => {
        if (!searchCity) return;
        setLoading(true);
        setError(null);
        setHasSearched(true);
        setCurrentWeather(null);
        setForecast(null);

        try {
            const weatherData = await getWeatherDataForCity(searchCity);
            setCurrentWeather(weatherData.current);
            setForecast(weatherData.forecast);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#5D3A6A] to-[#362344] text-white p-4">
            <div className="w-full max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-wider text-shadow">
                        Weather App
                    </h1>
                    <p className="text-lg text-blue-100 mt-2">Your AI-powered weather forecast</p>
                </header>

                <SearchBar onSearch={handleSearch} loading={loading} />

                <div className="mt-8 w-full">
                    {loading && <Loader />}
                    {error && (
                        <div className="bg-red-500/50 backdrop-blur-sm text-white p-4 rounded-xl text-center shadow-lg">
                            <i className="fas fa-exclamation-triangle mr-2"></i> {error}
                        </div>
                    )}
                    
                    {!loading && !error && !hasSearched && (
                        <div className="text-center p-8 bg-black/10 rounded-xl backdrop-blur-sm shadow-lg">
                            <h2 className="text-2xl font-semibold">Welcome!</h2>
                            <p className="mt-2 text-blue-200">Enter a city name above to get the latest weather forecast.</p>
                        </div>
                    )}

                    {!loading && !error && currentWeather && forecast && (
                        <div className="grid grid-cols-1 gap-8">
                            <WeatherDisplay data={currentWeather} />
                            <ForecastDisplay data={forecast} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default App;