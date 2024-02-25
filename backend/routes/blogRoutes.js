import express from 'express';
import { getBlogByAuthorId, createBlog, getAllBlogs } from '../controllers/blogContoller.js';

const router = express.Router();

router.get('/blogs', getAllBlogs);
router.post('/new', createBlog);
router.get('/id',getBlogByAuthorId);

export default router;