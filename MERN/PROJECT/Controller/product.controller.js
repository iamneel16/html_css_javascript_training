const myProduct = require("../Model/product.model");
exports.test = (req, res) => res.send("Testing Connection Of Product API");
exports.submit = (req, res) => {
    let product = new myProduct({
        productid:req.body.productid,
        productname:req.body.productname,
        price:req.body.price,
        description:req.body.description,
        img:req.body.img

    })
    product.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send("1 Record Inserted Succesfully");
    })
}
exports.product = (req, res) => {
    myProduct.find(function (err, result) {
        if (err) {
            return console.log(err);
        }
        res.send(result);
    });
}

exports.productdetail=(req,res)=>{

    myProduct.findById(req.params.id,function(err,result){
        if(err)
        {
            return console.log(err)
        }
        res.send(result);
    })
}
exports.delete=(req,res)=>{
    myProduct.deleteOne({_id:req.params.id},function(err,result){
        if(err)
        {
            return console.log(err)
        }
        res.send("Deletion Succes")
    })
}
exports.update=(req,res)=>{
    myProduct.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
        myProduct.findOne({_id:req.params.id}).then(function(result){
            res.send(result);
        })
    })
}