const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app =  express();

const authRoutes = require("./routes/auth.routes");

//Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

//Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to peer-to-peer toutoring app"
    });
});

//Server port
const PORT = process.env.PORT ||5000;

//Start server
app.listen(PORT,() =>{
    console.log(`Server running on http://localhost:${PORT}`);
});