//acquiring packages
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet =require("helmet");
const morgan =require("morgan");

//acquiring routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//db connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Connecting...");
        console.log("Database Successfully connected");
    }
});

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

//server listening port
app.listen(process.env.PORT || 5000, function(req,res){
    console.log("Backend-Server is running on port 5000");
})