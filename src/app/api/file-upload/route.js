import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
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
        const { fileName, fileType, uploadedFileKey, action } = await req.json();

        if (action === 'upload') {
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
        }

        if (action === 'get') {
            const getUploadedFileCommand = new GetObjectCommand({
                Key: uploadedFileKey,
                Bucket: bucketName,
            });

            const getUploadedFileUrl = await getSignedUrl(client, getUploadedFileCommand);
            return NextResponse.json({ url: getUploadedFileUrl }, { status: 200 });
        }

        if (action === 'delete') {
            const deleteObjectCommand = new DeleteObjectCommand({
                Bucket: bucketName,
                Key: uploadedFileKey,
            });

            // eslint-disable-next-line no-unused-vars
            const response = await client.send(deleteObjectCommand);

            return NextResponse.json({ status: 'success' }, { status: 200 });
        }
    } catch (error) {
        throw error;
    }
};

export { POST };
