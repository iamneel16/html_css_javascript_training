const express=require("express");
const router=express.Router();
const order_controller=require("../Controller/order.controller")

router.get("/test",order_controller.test);
router.post("/userorder",order_controller.order);
router.put("/updateorder/:id",order_controller.update);
router.get("/orderlist",order_controller.orderlist);
router.get("/order/:id",order_controller.orderdetail);


module.exports = router