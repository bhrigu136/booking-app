
const mongoose = require("mongoose");
const Slot = require("./models/Slot");

mongoose.connect("mongodb://127.0.0.1:27017/booking-app")
  .then(() => console.log("Mongo Connected for Seeding"))
  .catch(err => console.log(err));

const seedSlots = [
  { time: "09:00 AM", isBooked: false },
  { time: "10:00 AM", isBooked: false },
  { time: "11:00 AM", isBooked: false },
  { time: "12:00 PM", isBooked: false },
  { time: "01:00 PM", isBooked: false },
  { time: "02:00 PM", isBooked: false },
  { time: "03:00 PM", isBooked: false },
  { time: "04:00 PM", isBooked: false },
  { time: "05:00 PM", isBooked: false },
  { time: "06:00 PM", isBooked: false },
  { time: "07:00 PM", isBooked: false },
  { time: "08:00 PM", isBooked: false },
];

const seedDB = async () => {
  await Slot.deleteMany({}); // Clears old data
  await Slot.insertMany(seedSlots);
  console.log("Database Seeded with Time Slots");
  mongoose.connection.close();
};

seedDB();