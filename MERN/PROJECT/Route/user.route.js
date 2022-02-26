const express=require("express");
const router=express.Router();
const user_controller=require("../Controller/user.controller")

router.get("/test",user_controller.test);

router.post("/submit",user_controller.submit);


router.get("/user",user_controller.user);
router.get("/user/:id",user_controller.userdetail);
router.delete("/delete/:id",user_controller.delete)
router.put("/update/:id",user_controller.update)
router.post("/get",user_controller.get);




module.exports = router