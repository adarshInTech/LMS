import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";

// initialize express

const app = express();

//conncet to database

await connectDB();

// Middlewares

app.use(cors());

// Routes

app.get("/", (req, res) => res.send("Api working"));

// port

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running at port" + " " + PORT);
});
