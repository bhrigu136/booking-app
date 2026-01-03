import { useEffect, useState } from "react";
import { fetchSlots, bookSlot } from "../api";
import SlotGrid from "../components/SlotGrid";

const Home = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSlots = async () => {
    try {
      setLoading(true);
      const data = await fetchSlots();
      setSlots(data);
    } catch (err) {
      setError("Failed to load slots");
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (slotId) => {
    try {
      await bookSlot(slotId);
      loadSlots(); 
    } catch (err) {
      alert("Slot already booked or error occurred");
    }
  };

  useEffect(() => {
    loadSlots();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading slots...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-bold text-red-500">{error}</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-sm">
          Resort Booking
        </h1>
        
        {/* Pass data to the Grid Component */}
        <SlotGrid slots={slots} onBook={handleBook} />
      </div>
    </div>
  );
};

export default Home;