var express = require("express")
var router = express.Router()

router.get('/', function(req,res){
    res.send("This is get routing")
})
router.post('/post', function(req,res){
    res.send("This is post routing")
})
router.delete('/delete',function(req,res){
    res.send("This is Delete Routing")
})

module.exports = router;