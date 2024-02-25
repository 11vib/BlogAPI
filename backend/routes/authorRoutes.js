import express from 'express';
import { login, register, getAllUsers } from '../controllers/authorController.js';

const router = express.Router();

router.post('/login',login);
router.post('/register',register);
router.get('/users/id', getAllUsers);

export default router;