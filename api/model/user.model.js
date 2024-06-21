import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://www.instagram.com/p/CbjuIoovsW3MMdMmhJJ-auhu2aOkG9pX0B4NP40/?img_index=1"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;