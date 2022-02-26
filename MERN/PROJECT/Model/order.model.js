const mongoose = require("mongoose");

const schema = mongoose.Schema;

let OrderSchema = new schema({
    
    cartItems: [
        {
            _v:Number,
            _id: {
                type: Object
            },
            description:String,
            img:String,
            price:Number,
            productid:Number,
            productname:String,
            qty:Number
        }

    ],

});

module.exports = mongoose.model("OrderData", OrderSchema);