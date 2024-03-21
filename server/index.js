const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");

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
  // const products = [
  //   {
  //     name: "Kat Walk C 2 Core",
  //     imgName: ["ket_walk_c_2_core_treadmill.png"],
  //     description:
  //       "C2 Core brings VR gamers into an immersive and physically active VR adventure, offering maximum performance of the core functions of KAT VR Treadmills at minimum cost. Embark on an immersive and active VR journey with C2 Core! Experience the full power of KAT VR Treadmill’s core functions without breaking the bank. This is the ultimate affordable solution for VR enthusiasts, delivering precision in locomotion that gamers worldwide have eagerly awaited. Elevate your VR adventures today with C2 Core and step into a new realm of affordable excellence!",
  //     compatible: "Stream VR, Meta, oculus, PlayStation",
  //     brand: "KAT VR",
  //     type: "TreadmillsAndFitness",
  //     price: "1199.99",
  //   },
  //   {
  //     name: "ICAROS Pro",
  //     imgName: ["icaros_pro.png"],
  //     description:
  //       "ICAROS provides the eco-system for exciting and performance improving exercise experiences. The ICAROS Pro combines fitness with virtual reality and enables users to fly, dive or drive through virtual worlds while improving fitness. Train different muscle groups with a focus on upper body and core while improving reflexes, balance and coordination. Made in Germany from premium materials, the ICAROS Pro devices are highly optimized for professional use and can be installed almost anywhere.",
  //     compatible: "PICO 4, HTC Vive, Meta quest",
  //     brand: "ICAROS",
  //     type: "TreadmillsAndFitness",
  //     price: "11900",
  //   },
  //   {
  //     name: "Omni One",
  //     imgName: ["omni_one.png"],
  //     description:
  //       "Omni One is the ultimate VR gaming system that provides unmatched immersion and freedom of movement in VR. This all-inclusive package features the Omni One treadmill, VR headset, and access to the Omni One game store.",
  //     compatible: "Pico Neo 2 Headset",
  //     brand: "omni one",
  //     type: "TreadmillsAndFitness",
  //     price: "2595",
  //   },
  // ];

  // Product.insertMany(products)
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Server error" });
    });
});

app.get("/api/get-product/:productName", async (req, res) => {
  const { productName } = req.params;

  Product.findOne({ name: productName })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Server error" });
    });
});

// AWS S3 query
// const getObjectParams = {
//   Bucket: bucketName,
//   Key: "d3c8027e6ae8a22c0de7b2e5a879f274.jpg",
// };

// const command = new GetObjectCommand(getObjectParams);
// const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

// {
//   name: "Meta Quest 2 Left Controller",
//   imgName: ["meta_quest_2_left_controller.jpg"],
//   price: "74.99",
//   description:
//     "Meta Quest 2 Touch controllers are sold separately. Choose right or left controller in cart. Includes lanyard. Requires Meta Quest 2 headset, also sold separately.",
//   brand: "Meta",
//   type: "VRController",
//   compatible: "Compatible with Meta Quest 2",
// },
// {
//   name: "Meta Quest 3 Touch Plus Left Controller",
//   imgName: ["meta_quest_2_left_controller.jpg"],
//   price: "74.99",
//   description:
//     "Meta Quest 2 Touch controllers are sold separately. Choose right or left controller in cart. Includes lanyard. Requires Meta Quest 2 headset, also sold separately.",
//   brand: "Meta",
//   type: "VRController",
//   compatible: "Compatible with Meta Quest 2",
// },
// {
//   name: "Meta Quest 3 Touch Plus Left Controller",
//   imgName: ["meta_quest_3_touch_plus_left_controller.jpg"],
//   price: "74.99",
//   description:
//     "Replace your Meta Quest Touch Plus controller, which includes a wrist strap and pairs exclusively with Meta Quest 3. Choose the right or left version in cart — each is sold separately.",
//   brand: "Meta",
//   type: "VRController",
//   compatible: "Compatible with Meta Quest 3",
//   weight: "103g",
// },
// {
//   name: "Meta Quest 3 Touch Plus Right Controller",
//   imgName: ["meta_quest_3_touch_plus_right_controller.jpg"],
//   price: "74.99",
//   description:
//     "Replace your Meta Quest Touch Plus controller, which includes a wrist strap and pairs exclusively with Meta Quest 3. Choose the right or left version in cart — each is sold separately.",
//   brand: "Meta",
//   type: "VRController",
//   compatible: "Compatible with Meta Quest 3",
//   weight: "103g",
// },
// {
//   name: "Meta Quest Touch Pro Left Controller",
//   imgName: ["meta_quest_touch_pro_left_controller.jpg"],
//   price: "144.99",
//   description:
//     "Meta Quest Touch Pro Controllers are included with purchase of Meta Quest Pro. Choose right or left replacement controller in cart. Includes lanyard and stylus tip. Requires Meta Quest Pro headset.",
//   brand: "Meta",
//   type: "VRController",
//   compatible:
//     "Compatible with Meta Quest 2, Quest 3 and Meta Quest Pro (comes in box with purchase of headset)",
//   weight: "413g",
//   color: "Black",
// },
// {
//   name: "Meta Quest Touch Pro Right Controller",
//   imgName: ["meta_quest_touch_pro_right_controller.jpg"],
//   price: "144.99",
//   description:
//     "Meta Quest Touch Pro Controllers are included with purchase of Meta Quest Pro. Choose right or left replacement controller in cart. Includes lanyard and stylus tip. Requires Meta Quest Pro headset.",
//   brand: "Meta",
//   type: "VRController",
//   compatible:
//     "Compatible with Meta Quest 2, Quest 3 and Meta Quest Pro (comes in box with purchase of headset)",
//   weight: "413g",
//   color: "Black",
// },
// {
//   name: "Meta Quest Pro VR Earphones",
//   imgName: [
//     "meta_quest_pro_vr_earphones_1.jpg",
//     "meta_quest_pro_vr_earphones_2.jpg",
//   ],
//   price: "49.99",
//   description:
//     "Tune out background noise and step into a hi-fidelity audio experience with a customized fit. Works with Meta Quest Pro light blocking accessories in place.",
//   brand: "Meta",
//   type: "Audio",
//   compatible: "Compatible with Meta Quest Pro",
//   weight: "0.8g",
//   color: "Black",
// },
