import { mongoose } from 'mongoose';

import PostMessage from '../models/postMessage.js'

export const getPosts= async (req,res)=>{
    try{
        const postMessages=await PostMessage.find();
        //console.log(postMessages);
        res.status(200).json(postMessages);
    }catch(error){
        console.log('error retrieving post',error)
        res.status(404).json({message:error.message});
    }
}



export const createPost=async (req,res)=>{
    try{
         const post=req.body;
         const newPost=new PostMessage(post);
         const createdPost= await newPost.save();
         res.status(201).json(createdPost);
    }catch(error){
           console.log('error retrieving post',error)
          res.status(409).json({message:error.message});
    }
}


export const updatePost=async (req,res)=>{
    try{
        const _id=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with id " + _id)
        const post=req.body;
        const updatedPost=await PostMessage.findByIdAndUpdate(_id,post,{new:true});
        res.status(200).json(updatedPost);
    }catch(error){
        console.log('error retrieving post',error)
        res.status(404).json({message:error.message});
    }
}

export const deletePost=async (req,res)=>{
    try{
        const _id=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with id " + _id)
        const deletedPost=await PostMessage.findByIdAndDelete(_id);
        res.status(200).json(deletedPost);
        
        console.log(deletedPost);

    }catch(error){
        console.log('error retrieving post',error)
        res.status(404).json({message:error.message});
    }
}   