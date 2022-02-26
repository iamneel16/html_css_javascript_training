const mongoose = require("mongoose");

const schema = mongoose.Schema;

let MRSchema = new schema({
    mrdate:Date,
    mrno: Number,
    supplier: String,
    productname: {
        type: String
    },
    quantity: {
        type: Number,
        default: 1
    },
    amount: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("MRData", MRSchema);