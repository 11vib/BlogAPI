import {blogModel} from '../models/blogModel.js';
export const getAllBlogs = async (req,res) => {
    try{
        const blogs = await blogModel.find();
        res.json(blogs);
    }catch(e){
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createBlog = async (req, res) => {
    try{
        const {authorId,title,content} = req.body;
        const newBlog = new blogModel({authorId,title,content});
        await newBlog.save();
        res.status(201).json({ message: 'Blog created successfully' });
    }catch(e){
        console.error(e);
    res.status(500).json({ message: 'Internal server error' });
    }
};

export const getBlogByAuthorId = async (req, res) => {
    try {
      const authorId = parseInt(req.query.authorId);
      const blogs = await blogModel.find({ authorId });
      res.json(blogs);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Internal server error' });
    }
  };