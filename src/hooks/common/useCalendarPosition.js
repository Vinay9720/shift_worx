import { useState, useEffect } from 'react';

export const useCalendarPosition = () => {
    const [calendarPosition, setCalendarPosition] = useState('bottom-center');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            let newPosition = 'top-right'; // Default position for large screens

            if (screenWidth < 600) {
                newPosition = 'bottom-center'; // Small screens
            } else if (screenWidth < 960) {
                newPosition = 'top-left'; // Medium screens
            }

            // Adjust position based on screen height breakpoints
            if (screenHeight < 500) {
                newPosition = `bottom-${newPosition.split('-')[1]}`; // Move to the bottom for short screens
            } else if (screenHeight < 800) {
                newPosition = `top-${newPosition.split('-')[1]}`; // Move to the top for medium-height screens
            }

            setCalendarPosition(newPosition);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return calendarPosition;
};
