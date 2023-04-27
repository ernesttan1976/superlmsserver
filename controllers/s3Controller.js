const AWS = require("aws-sdk");
const { shortid } = require("shortid");
const { readFileSync } =require("fs");

const AWS_BUCKET_NAME = "arn:aws:s3:::ernest-ga-app-bucket-1"

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

const uploadImage = async (req, res) => {
  // console.log(req.body);
  try {
    const { image } = req.body;
    if (!image) return res.status(400).send("No image");

    // prepare the image
    const base64Data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const type = image.split(";")[0].split("/")[1];

    // image params
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${shortid()}.${type}`,
      Body: base64Data,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: `image/${type}`,
    };

    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

const removeImage = async (req, res) => {
  try {
    const { image } = req.body;
    // image params
    const params = {
      Bucket: image.Bucket,
      Key: image.Key,
    };

    // send remove request to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
};

const uploadVideo = async (req, res) => {
  try {
    const { video } = req.files;
    // console.log(video);
    if (!video) return res.status(400).send("No video");

    // video params
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: `${shortid()}.${video.type.split("/")[1]}`,
      Body: readFileSync(video.path),
      ACL: "public-read",
      ContentType: video.type,
    };

    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

const removeVideo = async (req, res) => {
  try {
    const { Bucket, Key } = req.body;
    // console.log("VIDEO REMOVE =====> ", req.body);

    // video params
    const params = {
      Bucket,
      Key,
    };

    // upload to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  uploadImage,
  removeImage,
  uploadVideo,
  removeVideo,
}