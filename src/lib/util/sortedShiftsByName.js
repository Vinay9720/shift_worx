export const sortedShiftsByName = data => {
    return data.reduce((acc, cur) => {
        const dat = cur.name ? [...acc, cur] : [cur, ...acc];
        return dat;
    }, []);
};
