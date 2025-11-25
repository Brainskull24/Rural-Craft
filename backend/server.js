// import express from "express";
// import cors from "cors";
// import 'dotenv/config';
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/oderRoute.js";

// // App config

// const app = express();

// const PORT = process.env.PORT || 8080;
// connectDB()
// connectCloudinary()

// // middlewares

// app.use(express.json());
// app.use(cors())

// // api endpoints
// app.use("/api/users",userRouter)
// app.use("/api/products",productRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/order",orderRouter)

// app.get('/',(req,res)=>{
//     res.send("API Working")
// })

// app.listen(PORT,()=>console.log("Server Started on Port :" + PORT))

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import 'dotenv/config';

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/oderRoute.js";

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App config
const app = express();
const PORT = process.env.PORT || 8080;

connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// ---------------------------
// API ROUTES (Keep same)
// ---------------------------
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/api", (req, res) => {
  res.send("API Working");
});

// ---------------------------
// FRONTEND ROUTES
// Serve User FE
// ---------------------------
app.use("/user", express.static(path.join(__dirname, "public-user")));

app.get("/user/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public-user", "index.html"));
});

// ---------------------------
// FRONTEND ROUTES
// Serve Admin FE
// ---------------------------
app.use("/admin", express.static(path.join(__dirname, "public-admin")));

app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public-admin", "index.html"));
});

// ---------------------------
// ROOT
// ---------------------------
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ---------------------------
// START SERVER
// ---------------------------
app.listen(PORT, () => console.log("Server Started on Port: " + PORT));
