export const createNumberArray = a => {
    return Array.from({ length: a }, (_, index) => (index + 1).toString());
};
