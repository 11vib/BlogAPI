import { AuthorModel } from "../models/authorModel.js";
import { validationResult } from "express-validator";
export const register = async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        const {username,password} = req.body;
        const existingAuthor = await AuthorModel.findOne({username});
        if (existingAuthor) {
            return res.status(400).json({ error: "Username already in use" });
          }
          const newAuthor = new AuthorModel({
            username,
            password,
          });
          await newAuthor.save();
          res.json({ username:newAuthor.username, message: "Registration successful" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Registration failed" });
      }
};

export const login = async(req,res)=>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {username,password} = req.body;
    const author = await AuthorModel.findOne({username});
    if (!author) {
        return res.status(401).json({ error: "Authentication failed" });
      }
    if(password !== author.password){
        return res.status(401).json({ error: "Authentication failed" });
    }
    res.json({message:'Login successful'})
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication failed" });
      }
};

export const getAllUsers = async (req,res) => {
    try{
        const users = await AuthorModel.find();
        res.json(users);
    }catch(e){
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await AuthorModel.findByIdAndDelete(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};
