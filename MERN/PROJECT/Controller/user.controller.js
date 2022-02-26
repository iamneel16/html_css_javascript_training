const myUser = require("../Model/user.model");
exports.test = (req, res) => res.send("Testing Connection");

exports.submit = (req, res) => {
    let user = new myUser({
        userid: req.body.userid,
        password: req.body.password,
        status: req.body.status

    })
    user.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send("1 Record Inserted Succesfully");
    })
}
exports.user = (req, res) => {
    myUser.find(function (err, result) {
        if (err) {
            return console.log(err);
        }
        res.send(result);
    });
}
exports.userdetail = (req, res) => {
    // myUser.findOne({userid:userid, password:password},function(err,res))
    myUser.findById(req.params.id, function (err, result) {
        if (err) {
            return console.log(err)
        }
        res.send(result);
    })
}

exports.delete = (req, res) => {
    myUser.deleteOne({_id:req.params.id}, function (err, result) {
        if (err) {
            return console.log(err)
        }
        res.send("Deletion Successful")
    })
}
exports.update = (req, res) => {
    myUser.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (result) {
        myUser.findOne({ _id: req.params.id }).then(function (result) {
            res.send(result);
        })
    })
}


exports.get = (req, res) => {
    // let user = new myUser({
    //     userid: req.body.userid,
    //     password: req.body.password,
    //     status: req.body.status
        
    // })
    console.log(req.body.userid,req.body.password)
    myUser.findOne({ userid: req.body.userid, password: req.body.password }, function (err, result) {
        if(result===null){
            return res.status(400).send("Invalid Creds")
        }
        console.log(result)
        res.send(result.status)
    })
}