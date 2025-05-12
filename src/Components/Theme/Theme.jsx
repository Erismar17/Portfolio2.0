import { useEffect } from 'react';
import { useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-16 h-8 rounded-full transition-all duration-500 ${darkMode ? 'bg-neutral-900 bg-opacity-40' : 'bg-gray-200 bg-opacity-40'} shadow-inner`}
        >
            <span
                className={`absolute top-0.5 left-0.5 h-7 w-7 rounded-full transition-all duration-500 ${darkMode
                    ? 'translate-x-8 bg-gradient-to-b from-gray-600 to-gray-800 shadow'
                    : 'translate-x-0 bg-gradient-to-b from-white to-gray-300 shadow-inner'}`}
            />
        </button>
    );
};

export default ThemeToggle;