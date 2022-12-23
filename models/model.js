const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  shortDesc: {
    type: String,
  },
  description: {
    type: String,
  },
  reviews: [
    {
      rating: {
        type: Number,
      },
      text: {
        type: String,
      },
    },
  ],
  //   rating: {
  //     type: Number,
  //   },
  //   text: {
  //     type: String,
  //   },
  avgRating: {
    type: Number,
  },
});

let Product = mongoose.model("Product", productSchema);

module.exports = { Product };
