import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], 
            { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            setCurrentTime(formattedTime);
        };


        const intervalId = setInterval(updateClock, 1000);


        return () => clearInterval(intervalId);
    }, []);

    return currentTime

};

export default Clock;
