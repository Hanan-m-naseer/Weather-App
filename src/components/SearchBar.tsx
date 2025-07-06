
import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
    loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="E.g., London, Tokyo, New York"
                    className="w-full pl-5 pr-12 py-3 bg-white/10 text-white placeholder-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-white bg-yellow-500 rounded-full hover:bg-yellow-400 transition"
                    disabled={loading}
                >
                    {loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-search"></i>}
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
