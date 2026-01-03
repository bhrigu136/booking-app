const express = require("express");
const router = express.Router();
const Slot = require("../models/Slot");

// GET all slots
router.get("/", async (req, res) => {
  try {
    const slots = await Slot.find();
    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch slots" });
  }
});

// POST book a slot
router.post("/book", async (req, res) => {
  const { slotId } = req.body;

  try {
    const slot = await Slot.findById(slotId);

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }

    if (slot.isBooked) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    slot.isBooked = true;
    await slot.save();

    res.json({ message: "Slot booked successfully" });
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
});

module.exports = router;
