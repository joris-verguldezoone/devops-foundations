import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../../frontend")));

console.log( path.join(__dirname, "../../frontend/index.html"), 'cc' )

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
