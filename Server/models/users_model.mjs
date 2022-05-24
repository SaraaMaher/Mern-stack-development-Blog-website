import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String
    },
    password:{
        type:String
    },
    email:{
      type:String
    },
    phone:{
        type:Number,
        minlength:11
    },
    gender:{
        type:String
    }
  }, {
    timestamps: true,
  });
var User = mongoose.model("User", userSchema);

export default User;