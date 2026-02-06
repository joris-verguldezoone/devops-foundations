import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import path from "path";
import cors from 'cors';



dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3010',
  credentials: true
}));


app.get("/", (req, res) => {
  res.send("hello world");
  
});

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
