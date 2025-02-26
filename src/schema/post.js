import mongoose from "mongoose";

// This is the implementation of post schema
const postSchema=new mongoose.Schema({
  caption:{
    type:String,
    require:true,
    minLength:5,
  },
  image:{
    type:String,
    require:true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,  //define type of user id (to mention id of another doc we need "objectId" object)
    ref:"user"  //tjis will link it to user and it will get id of user
  }
});

const post=mongoose.model("post",postSchema);
export default post;