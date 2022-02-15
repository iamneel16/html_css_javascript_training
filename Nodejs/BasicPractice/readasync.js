const fs = require("fs")
const text = fs.readFile("demo.txt","utf-8",(err,data)=>{

    console.log(err,data)
})
console.log("This is async")

// err and data are two parameters to the callback function. They are mandatory.
// If file name is wrong or any other error takes place, it will be dispalyed using the "err". The data of the file by "data"
// In async execution, program will move ahead. Hence, line by line execution not guaranteed. 
// High change of line 6 getting executed and displayed first and then later on line 4 is displayed
