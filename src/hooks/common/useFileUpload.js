'use client';

import { useMutation } from 'react-query';

import { useToast } from './useToast';

const uploadMedia = ({ file, action }) => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_FE_URL}/api/file-upload`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileName: file.name, fileType: file.type, fileSize: file.size, action }),
        })
            .then(async res => {
                if (!res.ok) {
                    throw new Error(`Failed to upload the file. Status: ${res.status}`);
                }

                const { putUrl, getUrl, key } = await res.json();
                const uploadResponse = await fetch(putUrl, {
                    body: file,
                    method: 'PUT',
                    headers: { 'Content-Type': file.type },
                });

                if (!uploadResponse.ok) {
                    throw new Error(`Failed to upload the file. Status: ${uploadResponse.status}`);
                }

                resolve({ status: true, uploadedUrl: getUrl, key });
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const useFileUpload = () => {
    const showToast = useToast();
    return useMutation(uploadMedia, {
        select: data => {
            const fileData = data.data;
            return fileData;
        },
        onError: () => {
            showToast('Something went wrong, please try again', 'error');
        },
    });
};
