import express from 'express';
const user_route =express.Router();
import { register,login } from '../controller/cont_user.js';

user_route.post('/register',register);
user_route.post('/login',login);
export default user_route;