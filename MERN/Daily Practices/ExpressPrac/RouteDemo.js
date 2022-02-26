var express = require("express")

var app = express()

var route = require("./Route")

app.use('/',route)
app.listen(5000,function(){
    console.log("Server is running")
})