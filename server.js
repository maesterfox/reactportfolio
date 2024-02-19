import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sendEmailHandler from "./send-email.js"; // Update the path accordingly
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", sendEmailHandler); // Use the imported handler

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
