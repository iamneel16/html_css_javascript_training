const express=require("express");
const router=express.Router();
const product_controller=require("../Controller/product.controller")

router.get("/testproduct",product_controller.test);
router.post("/submitproduct",product_controller.submit);
router.get("/product",product_controller.product);
router.get("/product/:id",product_controller.productdetail);
router.delete("/delete/:id",product_controller.delete)
router.put("/update/:id",product_controller.update)




module.exports = router