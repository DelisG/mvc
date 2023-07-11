import express from 'express';
import ApiController from '../controllers/apiControllers.js';

const router = express.Router();

router
.get("/", ApiController.getAllApis)
.post("/", ApiController.createApis)
.put("/:id", ApiController.updateApis)
.delete("/:id", ApiController.deleteApis)
.get("/:id", ApiController.getByIdApis);

export default router;