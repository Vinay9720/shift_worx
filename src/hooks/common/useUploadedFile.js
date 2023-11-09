'use client';

import { useMutation } from 'react-query';

import { useToast } from './useToast';

const getMedia = ({ uploadedFileKey, action }) => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_FE_URL}/api/file-upload`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uploadedFileKey, action }),
        })
            .then(async res => {
                if (!res.ok) {
                    throw new Error(`Failed. Status: ${res.status}`);
                }

                const { url } = await res.json();

                resolve({ status: true, uploadedUrl: url });
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const useUploadedFile = () => {
    const showToast = useToast();
    return useMutation(getMedia, {
        select: data => {
            const fileData = data.data.uploadedUrl;
            return fileData;
        },
        onError: () => {
            showToast('Something went wrong, please try again', 'error');
        },
    });
};
