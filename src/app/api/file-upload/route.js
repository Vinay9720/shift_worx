import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';

const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME;
const region = process.env.NEXT_PUBLIC_S3_REGION;
const client = new S3Client({
    region,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
    },
});

const POST = async req => {
    try {
        const { fileName, fileType, fileSize } = await req.json();
        if (!fileType || !fileName || !fileSize) {
            throw new Error('There was a problem with the file!');
        }

        const putCommand = new PutObjectCommand({
            Key: fileName,
            ContentType: fileType,
            Bucket: bucketName,
        });
        const putUrl = await getSignedUrl(client, putCommand, { expiresIn: 600 });

        const getCommand = new GetObjectCommand({
            Key: fileName,
            Bucket: bucketName,
        });

        const getUrl = await getSignedUrl(client, getCommand);

        return NextResponse.json({ putUrl, getUrl, key: fileName }, { status: 200 });
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

export { POST };
