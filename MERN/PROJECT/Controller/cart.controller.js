const myCart = require("../Model/cart.model");
exports.test = (req, res) => res.send("Testing Connection Of Cart API");
exports.usercart = (req, res) => {
    let user = new myCart({
        userid:req.body.userid,
        products:req.body.products
    })
    user.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send("Item successfuly added");
    })
}
exports.update=(req,res)=>{
    myCart.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
        myCart.findOne({_id:req.params.id}).then(function(result){
            res.send(result);
        })
    })
}
exports.delete=(req,res)=>{
    myCart.deleteOne({_id:req.params.id},function(err,result){
        if(err)
        {
            return console.log(err)
        }
        res.send("Deletion Successful")
    })
}