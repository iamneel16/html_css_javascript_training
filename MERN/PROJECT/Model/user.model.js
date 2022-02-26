const mongoose=require("mongoose");

const schema=mongoose.Schema;

let userSchema=new schema({
    userid:Number,
    password:String,
    status:String
});

module.exports=mongoose.model("userData",userSchema);