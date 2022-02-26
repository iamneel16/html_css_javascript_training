const mongoose = require("mongoose");

const schema = mongoose.Schema;

let CartSchema = new schema({
    userid: Number,
    products: [
        {
            productid: {
                type: Number
            },
            quantity: {
                type: Number,
                default: 1
            }
        }

    ]
});

module.exports = mongoose.model("CartData", CartSchema);