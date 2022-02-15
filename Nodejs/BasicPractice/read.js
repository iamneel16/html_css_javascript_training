const fs = require("fs")
const text = fs.readFileSync("demo.txt","utf-8")
console.log("this is my demo example of node \n")
console.log(text)

let demoreplace = text.replace("Demo","Replace")
console.log("Writing A File")
fs.writeFileSync("demoreplace.txt",demoreplace)