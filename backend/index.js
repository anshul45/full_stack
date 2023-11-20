import express from "express";
import dataRouter from "./routes/dataRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/data", dataRouter);

const port = 3001;

app.listen(port, () => console.log("server is listening on port " + port));
