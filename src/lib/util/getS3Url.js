export const getS3Url = key => {
    return `https://shiftworxdev.s3.amazonaws.com/${encodeURIComponent(key)}`;
};
