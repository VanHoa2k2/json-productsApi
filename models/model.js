const mongoose = require('mongoose');

const ornamentalPlantSchema = new mongoose.Schema({
  productName: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true,
  },
  productImg: [
     { 
          imgUrl: {
              type: String,
              required: true,
          },
      }
  ],
  price: {
      type: Number,
      required: true,
  },
  category: {
      type: String,
      required: true,
  },
  intro: [
    {
        introText: {
            type: String,
        }
    }
  ],
  characteristics: [
    {
        characteristicsText: {
            type: String,
        }
    }
  ],
  meaning: [
    {
        meaningText: {
            type: String,
        }
    }
  ],
  uses: [
    {
        usesText: {
            type: String,
        }
    }
  ],
  productCare: [
    {
        productCareText: {
            type: String,
        }
    }
  ],
  newProduct: { 
      type: Boolean, 
      default: false 
  },
  trendingProduct: { 
      type: Boolean, 
      default: false 
  },
})

let ornamentalPlant = mongoose.model('ornamental plant', ornamentalPlantSchema)

module.exports = { ornamentalPlant }
