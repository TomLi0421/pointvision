const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");
const { reset } = require("nodemon");

// aws service only
// const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

require("dotenv").config();

// aws service only
// const bucketName = process.env.BUCKET_NAME;
// const bucketRegion = process.env.BUCKET_REGION;
// const accessKey = process.env.ACCESS_KEY;
// const secretAccessKey = process.env.SECRET_ACCESS_KEY;

// const s3Client = new S3Client({
//   region: bucketRegion,
//   credentials: {
//     accessKeyId: accessKey,
//     secretAccessKey: secretAccessKey,
//   },
// });

// express app
const app = express();

// connect to mongodb
const dbURI = process.env.DATABASE_URL;
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
      console.log("Connected to db");
    });
  })
  .catch((err) => console.log(err));

// middleware allows localhost:5173 to access the server
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/api/get-all-product", async (req, res) => {
  // mongoose query
  // const product = new Product({
  //   name: "Varjo 5m Cable",
  //   imgName: "d3c8027e6ae8a22c0de7b2e5a879f274.jpg",
  //   description: "5m cable for Varjo VR-1 and VR-2",
  //   specs: "any",
  //   price: 69.0,
  // });
  // product
  //   .save()
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  Product.find()
    .then((result) => {
      res.send(result);
      // res.send("https://d2j3uzrexrokpc.cloudfront.net/" + result[0].imgName);
    })
    .catch((err) => {
      console.log(err);
    });
});

// AWS S3 query
// const getObjectParams = {
//   Bucket: bucketName,
//   Key: "d3c8027e6ae8a22c0de7b2e5a879f274.jpg",
// };

// const command = new GetObjectCommand(getObjectParams);
// const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
