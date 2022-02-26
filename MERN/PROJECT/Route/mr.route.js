const express=require("express");
const router=express.Router();
const mr_controller=require("../Controller/mr.controller")
router.get("/test",mr_controller.test);
router.post("/add",mr_controller.add);
router.get("/mr",mr_controller.mr)
router.get("/detail/:id",mr_controller.detail);
router.put("/update/:id",mr_controller.update);
router.delete("/delete/:id",mr_controller.delete);



module.exports = router