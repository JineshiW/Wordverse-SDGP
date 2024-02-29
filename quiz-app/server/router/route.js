import { Router } from "express";
const router =Router();

// import controllers
import * as controller from "../controllers/controller.js"

// Questions route API
router.get('/questions', controller.getQuestions)


export default router;
