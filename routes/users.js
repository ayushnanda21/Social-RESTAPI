const router = require("express").Router();

router.get("/", function(req,res){

    res.send("hey its' user route and is working");

});





//exporting to server file
module.exports = router