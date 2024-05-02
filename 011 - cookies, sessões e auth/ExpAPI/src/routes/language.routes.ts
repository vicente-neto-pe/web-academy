import { Router } from "express";
import languageController from "../resources/languages/language.controller";

const languageRouter = Router();

languageRouter.post("/change", 
languageController.changeLanguage);

export default languageRouter;
