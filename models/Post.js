//schema for user model
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
{
    userId:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        max:500
    },
    img:{
        type: String,
        default:""
    },
    likes:{
        type: Array,
        default: [],
    },
},
{ timestamps: true}
);

//exporting model
module.exports = mongoose.model("Post",PostSchema);