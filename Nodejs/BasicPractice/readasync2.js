const fs = require("fs")
const text = fs.readFile("demo.txt","utf-8",(err,data)=>{
    console.log("Data Has Been Loaded \n")
    console.log(err,data)
})
console.log("Loading Data. \n")