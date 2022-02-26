const mongoose=require("mongoose");

const schema=mongoose.Schema;

let productSchema=new schema({
    productid:Number,
    productname:String,
    price:Number,
    description:String,
    img:String
});

module.exports=mongoose.model("productData",productSchema);