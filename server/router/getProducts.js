const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/get-all-products", async (req, res) => {
  // mongoose query
  // const products = [
  //   {
  //     name: "TactSuit X40",
  //     imgName: ["bhaptics_tactsuit_x40_1.png", "bhaptics_tactsuit_x40_2.png"],
  //     description:
  //       "Experience gaming like never before with the bHaptics Tactsuit X40, a cutting-edge wireless haptic vest featuring 40 precise haptic feedback points in an ergonomic design. Enhance your VR adventures with seamless cross-platform support and untethered, lag-free gameplay. The adjustable, one-size-fits-all vest includes customizable shoulder and side straps, a detachable and washable mesh lining, and compatibility with leading VR headsets such as Oculus Quest 2, HTC Vive, and Valve Index.",
  //     compatible: "Meta Quest 3, Pro and 2, Steam VR",
  //     brand: "bHaptic",
  //     type: "HapticDevices",
  //     price: "529",
  //   },
  //   {
  //     name: "TactGlove DK1",
  //     imgName: ["tactglove_dk1_1.png", "tactglove_dk1_1.png"],
  //     description:
  //       "The bHaptics TactGlove DK1 Wireless Haptic Gloves are the perfect VR accessories, allowing you to experience virtual reality with tactile feedback. Make your VR experience more immersive with the DK1 Wireless Haptic Gloves, featuring haptic feedback technology for a realistic feel. Get ready to take your VR experience to the next level.",
  //     compatible: "Meta Quest 3, Pro and 2",
  //     brand: "bHaptic",
  //     type: "HapticDevices",
  //     price: "299",
  //   },
  //   {
  //     name: "TactVisor",
  //     imgName: ["tactvisor_1.png", "tactvisor_2.png"],
  //     description:
  //       "TactVisor's water and pollutant-resistant design, with four haptic feedback points, provides its users with an immersive and pleasant gaming experience, delivering accurate sensations ranging from a gentle breeze to the impact of a headshot.",
  //     compatible:
  //       "Meta Quest 3, Pro and 2, Native support, Valve Index, Rift S",
  //     brand: "bHaptic",
  //     type: "HapticDevices",
  //     price: "149",
  //   },
  // ];
  // Product.insertMany(products)
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  try {
    Product.find()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((e) => {
        res.status(500).send({ message: "Server error" });
      });
  } catch (e) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

router.get("/:productName", async (req, res) => {
  const { productName } = req.params;

  Product.findOne({ name: productName })
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    })
    .catch((e) => {
      res.status(500).send({ message: "Internal server error" });
    });
});

module.exports = router;

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
