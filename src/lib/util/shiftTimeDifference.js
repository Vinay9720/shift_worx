export const convertTo24HourFormat = time12h => {
    const time = time12h.slice(0, 5); // Extract the first 5 characters for the time
    const period = time12h.slice(5);
    const [hour, minutes] = time.split(':');
    let hourValue = parseInt(hour, 10);
    if (period.toLowerCase() === 'pm' && hourValue !== 12) {
        hourValue += 12;
    }
    if (period.toLowerCase() === 'am' && hourValue === 12) {
        hourValue = 0;
    }
    return `${hourValue}:${+minutes}`;
};
