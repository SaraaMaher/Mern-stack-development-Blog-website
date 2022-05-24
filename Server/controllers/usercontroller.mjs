import express from "express";
import mongoose from "mongoose";
import User from "../models/users_model.mjs";
const router = express.Router();

 
export const getAllusers = async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const adduser = async (req, res) => {
    const { username, password, email, phone, gender } = req.body;
    const createNewuser= new User({
        username, password, email, phone, gender
    });
    try {
      await createNewuser.save();
      res.status(201).json(createNewuser);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
export default router;