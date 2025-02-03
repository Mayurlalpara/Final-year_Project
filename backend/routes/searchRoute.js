//this function is not in work
import express from 'express';
import { searchFood } from '../controllers/searchcontroller.js';

const searchRouter = express.Router();

searchRouter.get('/search', searchFood);

export default searchRouter;
