import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],              //array of strings
    selectedFile:String,
    likeCount:{                  //of type object
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const PostMessage=mongoose.model('PostMessage',postSchema);


export default PostMessage;