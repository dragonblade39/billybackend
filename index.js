const mongoose = require("mongoose");
const express = require("express");
const SL = require("./routes/SignupLoginroutes");
const cors = require("cors");

const app = express();

// MongoDB Connection
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://chethannv:chethan@chethan.kjdlxwb.mongodb.net/CyberBullying"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database Connected");
});
db.on("error", () => {
  console.log("Database not Connected");
});

// Middleware
app.use(
  cors({
    origin: "http://localhost:3001", // React app origin
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.options("*", cors()); // Handle preflight requests

// Routes
app.use("/Signup-Login", SL);

// Server
const port = 5500;
app.listen(port, () => {
  console.log("Server Started on " + port);
});
