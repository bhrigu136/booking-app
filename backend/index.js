const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const slotRoutes = require("./routes/slots");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Routes
app.use("/slots", slotRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/booking-app")
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () =>
      console.log(` Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error(" DB connection error:", err));
