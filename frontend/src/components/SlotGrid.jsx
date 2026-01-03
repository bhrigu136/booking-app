// C:Booking-app\frontend\src\components\SlotGrid.jsx
import React from "react";
import SlotCard from "./SlotCard";

const SlotGrid = ({ slots, onBook }) => {
  if (slots.length === 0) {
    return <p className="text-center text-gray-500">No slots available.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {slots.map((slot) => (
        <SlotCard key={slot._id} slot={slot} onBook={onBook} />
      ))}
    </div>
  );
};

export default SlotGrid;