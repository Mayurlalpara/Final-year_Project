import express from 'express'
import { feedBack, getFeedback, removeFeedback } from "../controllers/feedbackcontroller.js";

const feedbackRouter = express.Router();

feedbackRouter.post('/feedback',feedBack);
feedbackRouter.get('/feedbacklist',getFeedback);
feedbackRouter.delete('/remove',removeFeedback);

export default feedbackRouter;