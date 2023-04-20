const AWS = require('aws-sdk');
const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3Client = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey
});

function detectContentType(file) {
  const extension = file.split('.').pop();
  switch (extension) {
    case 'jpeg':
    case 'jpg':
    case 'png':
    case 'gif':
      return 'image/*';
    case 'pdf':
    case 'doc':
    case 'docx':
    case 'txt':
      return 'application/*';
    case 'mp4':
    case 'avi':
    case 'mkv':
      return 'video/*';
    default:
      return 'application/octet-stream';
  }
}

async function uploadFile(req, res) {
  try {
    console.log("Upload file", req.file)
    const file = req.file;
    const key = file.originalname;
    const fileStream = await fs.createReadStream(`${file.destination}${file.filename}`);
    const contentType = detectContentType(file.originalname);
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename,
      ContentType: contentType
    };
    console.log(uploadParams)

    const result = await s3Client.upload(uploadParams);
    res.status(200).json({ result: result, url: `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error })
  }
}

async function deleteFile(req, res, next) {
  const key = req.params.key;
  console.log("Delete file", req.params)
  const deleteParams = {
    Key: key,
    Bucket: bucketName,
  };
  try {
    await s3Client.deleteObject(deleteParams).promise();
    res.json({ message: "File deleted" });
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  uploadFile,
  deleteFile,
};
