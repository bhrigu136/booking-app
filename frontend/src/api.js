const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const fetchSlots = async () => {
  const response = await fetch(`${API_URL}/slots`);

  if (!response.ok) {
    throw new Error("Failed to fetch slots");
  }

  return response.json();
};

export const bookSlot = async (slotId) => {
  const response = await fetch(`${API_URL}/slots/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slotId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Booking failed");
  }

  return data;
};
