const productController = require('../controllers/productController')

const router = require('express').Router()

// ADD PRODUCT
router.post("/", productController.addProduct)

// GET ALL PRODUCT
router.get("/", productController.getAllProduct)

// UPDATE A PRODUCT
router.put("/:id", productController.updateProduct)

// DELETE PRODUCT
router.delete("/:id", productController.deleteProduct)

module.exports = router