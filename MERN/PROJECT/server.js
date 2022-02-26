const config=require("./config");
const express=require('express');
const cors = require("cors")

const bodyParser=require("body-parser");
const mongoose=require('mongoose');

const allUsers = require("./Route/user.route")
const allProduct = require("./Route/product.route")
const allCart = require("./Route/cart.route")
const allOrder = require("./Route/order.route")
const allMR = require("./Route/mr.route")

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.use("/user",allUsers)
app.use("/product",allProduct)
app.use("/cart",allCart)
app.use("/order",allOrder)
app.use("/mr",allMR)

mongoose
.connect(config.mongoURL)
.then(console.log("DB connected"))
.catch(err=>console.log(err));

mongoose.Promise=global.Promise;

let db=mongoose.connection;
db.on("error",console.error.bind(console,"Connection error in mongo"));

app.listen(config.serverPort,function(){
    console.log("Server is running");
})