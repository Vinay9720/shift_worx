export const formatExpirations = arr => {
    if (arr.length === 0) {
        return '';
    }
    if (arr.length === 1) {
        return arr[0];
    }
    const firstPart = arr.slice(0, arr.length - 1).join(', ');
    const lastPart = `+${arr.length - 1}`;
    return `${firstPart}, ${lastPart}`;
};
