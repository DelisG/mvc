import express from 'express';
import ApiController from '../controllers/apiControllers.js';

const router = express.Router();

router
.get("/", ApiController.getAllApis)
.post("/", ApiController.createApis)

export default router;