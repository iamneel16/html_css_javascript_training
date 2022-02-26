const myOrder = require("../Model/order.model");
exports.test = (req, res) => res.send("Testing Connection Of Order API");
exports.order = (req, res) => {
    let order = new myOrder({
        _v:req.body._v,
        _id:req.body._id,
        description:req.body.description,
        img:req.body.img,
        price:req.body.price,
        productid:req.body.productid,
        productname:req.body.productname,
        qty:req.body.qty
    })
    order.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send("Item successfuly added");
    })
}
exports.update=(req,res)=>{
    myOrder.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
        myOrder.findOne({_id:req.params.id}).then(function(result){
            res.send(result);
        })
    })
}
exports.orderlist = (req, res) => {
    myOrder.find(function (err, result) {
        if (err) {
            return console.log(err);
        }
        res.send(result);
    });
}
exports.orderdetail=(req,res)=>
{

    myOrder.findById(req.params.id,function(err,result){
        if(err)
        {
            return console.log(err)
        }
        res.send(result);
    })
}
