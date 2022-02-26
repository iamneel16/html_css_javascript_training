const express=require("express");
const router=express.Router();
const cart_controller=require("../Controller/cart.controller")

router.get("/testcart",cart_controller.test);
router.post("/addcart",cart_controller.usercart),
router.put("/update/:id",cart_controller.update),
router.delete("/delete/:id",cart_controller.delete)

module.exports = router