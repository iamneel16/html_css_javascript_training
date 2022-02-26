const myMR = require("../Model/mr.model");
exports.test = (req, res) => res.send("Testing Connection Of MR API");
exports.add = (req, res) => {
    let mr = new myMR({
        mrdate:req.body.mrdate,
        mrno:req.body.mrno,
        supplier:req.body.supplier,
        productname:req.body.productname,
        quantity:req.body.quantity,
        amount:req.body.amount
    })
    mr.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send("Item successfuly added");
    })
}
exports.detail=(req,res)=>
{

    myMR.findById(req.params.id,function(err,result){
        if(err)
        {
            return console.log(err)
        }
        res.send(result);
    })
}
exports.update=(req,res)=>{
    myMR.findOneAndUpdate({_id:req.params.id},req.body).then(function(result){
        myMR.findOne({_id:req.params.id}).then(function(result){
            res.send(result);
        })
    })
}
exports.delete=(req,res)=>{
    myMR.deleteOne({_id:req.params.id},function(err,result){
        if(err)
        {
            return console.log(err)
        }
        res.send("Deletion Successful")
    })
}
exports.mr = (req, res) => {
    myMR.find(function (err, result) {
        if (err) {
            return console.log(err);
        }
        res.send(result);
    });
}