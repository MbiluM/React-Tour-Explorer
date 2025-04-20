import React, { useState } from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, selectedDestination, onRefresh }) => {
  const [filteredTours, setFilteredTours] = useState(tours);

  const handleRemove = (id) => {
    setFilteredTours(filteredTours.filter((tour) => tour.id !== id));
  };

  const filteredList = filteredTours.filter((tour) =>
    selectedDestination ? tour.destination === selectedDestination : true
  );

  if (filteredList.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="gallery">
      {filteredList.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Gallery;