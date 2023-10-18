// Example: value = params.value, colorMap = {Approved: 'paleGreen',Declined: 'lightPink',Pending: 'dullGray'}

export const backgroundColor = (value, colorMap, defaultValue) => {
    const color = colorMap[value] || defaultValue;
    return color;
};
