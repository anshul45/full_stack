import express from "express";
import {
  getAllService,
  doctorsWithProfession,
} from "../controllers/dataController.js";

const dataRouter = express.Router();

dataRouter.get("/service", getAllService);
dataRouter.post("/doctors", doctorsWithProfession);

export default dataRouter;
