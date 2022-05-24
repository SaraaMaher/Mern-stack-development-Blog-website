import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
      type: String
    },
    body:{
        type:String
    },
    author:{
      type:String
    },
    tags:{
        type:String
    },
  }, {
    timestamps: true,
  });
var BlogPost  = mongoose.model("Blog", blogSchema);

export default BlogPost ;