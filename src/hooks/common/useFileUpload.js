import { useMutation } from 'react-query';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const uploadFileToS3 = async file => {
    const filename = file.name;
    const bucketName = 'shiftworxdev';
    const region = 'us-east-1';

    // AWS.config.update({
    //     accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_ID,
    //     secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
    //     region,
    // });

    const s3 = new S3Client({ region });

    const params = {
        Bucket: bucketName,
        Key: filename,
        Body: file,
        ACL: 'public-read',
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);

    // Build the file location URL
    const fileLocation = `https://${bucketName}.s3.${region}.amazonaws.com/${filename}`;

    return { location: fileLocation };
};

export const useFileUpload = () => {
    return useMutation(uploadFileToS3);
};
