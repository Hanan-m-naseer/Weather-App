
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            <p className="ml-4 text-xl">Fetching weather data...</p>
        </div>
    );
};

export default Loader;
