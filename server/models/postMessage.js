import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Schema({    //schema refers to organization within documents
  title:String,
  message:String,
  creator:String,
  tags:[String],
  selectedFile:String,
  likeCount:{
    type: Number,
    default:0
  },
  createdAt:{
    type:Date,
    default: new Date()
  },
});

//collection is a database that stores a group of documents
//model is a representation of the collection (to be able to use OOP for access)

const PostMessage = mongoose.model('PostMessage',postSchema)

export default postMessage

//23.49