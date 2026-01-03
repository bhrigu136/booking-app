// C:Booking-app\frontend\src\components\SlotCard.jsx
import React from "react";

const SlotCard = ({ slot, onBook }) => {
  return (
    <div className={`p-4 border rounded-lg shadow-md transition-colors ${
        slot.isBooked ? "bg-red-100 border-red-300" : "bg-green-50 border-green-300 hover:bg-green-100"
      }`}
    >
      <h3 className="text-lg font-bold text-gray-800">{slot.time}</h3>
      <p className="mb-4 text-sm text-gray-600">
        {slot.isBooked ? "Unavailable" : "Available"}
      </p>
      <button
        onClick={() => onBook(slot._id)}
        disabled={slot.isBooked}
        className={`w-full py-2 px-4 rounded text-white font-semibold ${
          slot.isBooked
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {slot.isBooked ? "Booked" : "Book Now"}
      </button>
    </div>
  );
};

export default SlotCard;