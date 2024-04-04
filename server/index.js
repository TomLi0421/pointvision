require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const loginRouter = require("./router/login");
const registerRouter = require("./router/register");
const getProductsRouter = require("./router/getProducts");
const stripeRouter = require("./router/stripe");
const searchOrderRouter = require("./router/searchOrder");
const userDataRouter = require("./router/userData");
const mailchimpRouter = require("./router/mailchimp");
const auth = require("./auth");

// aws service only
// const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

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

// middleware allows localhost:5173 to access the server
app.use(
  cors({
    origin: ["http://localhost:5173", "https://checkout.stripe.com"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to mongodb
const dbURI = process.env.DATABASE_URL;
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log("Connected to db");
    });
  })
  .catch((err) => console.log(err));

app.use("/api/get-products", getProductsRouter);
app.use("/api/user/login", loginRouter);
app.use("/api/user/register", registerRouter);
app.use("/api/stripe", stripeRouter);
app.use("/api/search/order", searchOrderRouter);
app.use("/api/user", auth, userDataRouter);
app.use("/api/mailchimp", mailchimpRouter);

// AWS S3 query
// const getObjectParams = {
//   Bucket: bucketName,
//   Key: "d3c8027e6ae8a22c0de7b2e5a879f274.jpg",
// };

// const command = new GetObjectCommand(getObjectParams);
// const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
