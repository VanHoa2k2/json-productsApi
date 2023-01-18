const { ornamentalPlant } = require('../models/model')

const productController = {
    //ADD PRODUCT
    addProduct: async(req, res)=> {
        try {
            const newProduct = new ornamentalPlant(req.body)
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
    //GET PRODUCT
    getAllProduct: async(req, res)=> {
        try {
            const products = await ornamentalPlant.find()
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //UPDATE PRODUCT
    updateProduct: async(req, res)=> {
        try {
            const product = await ornamentalPlant.findById(req.params.id)
            await product.updateOne({$set: req.body})
            res.status(200).json("Updates successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //DELETE PRODUCT
    deleteProduct: async(req, res)=> {
        try {
            await ornamentalPlant.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = productController