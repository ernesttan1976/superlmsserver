require('dotenv').config();
const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');


const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3Client = new S3Client({
  region,
  accessKeyId,
  secretAccessKey,
  bucketName
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

async function uploadFile(req,res) {
  console.log("Upload file", req.params, req.body, req.file)
  const file = req.file;
  const key = file.originalname;
  const fileStream = await fs.createReadStream(file.path);
  const contentType = detectContentType(file.originalname);
  const uploadParams = {
    Bucket: bucketName,
    Key: key,
    Body: file.buffer,
    ACL: 'public-read',
    ContentType: file.mimetype
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    res.status(200).json({ url: `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}` });  
  } catch (error){
    console.log(error);
    res.status(500).send({error: error})
  }
}

async function deleteFile(req, res, next) {
  const key = req.params.key;
  console.log("Delete file", req.params)
  const deleteParams = {
    Key: key,
    Bucket: bucketName,
  };
  try{
    await s3Client.send(new DeleteObjectCommand(deleteParams));
    res.json({message: "File deleted"});
  } catch (error){
    res.status(500).send({error: error})
  }
}

// function getFileStream(fileKey) {
//   const downloadParams = {
//     Key: fileKey,
//     Bucket: bucketName,
//   };
//   return s3.getObject(downloadParams).createReadStream();
// }

module.exports = {
  uploadFile,
  deleteFile,
};
