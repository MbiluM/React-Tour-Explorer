import React from "react";
import TourCard from "./TourCard"; // Assuming TourCard is a child component

const Gallery = ({ tours, loading, error, selectedDestination }) => {
  // Filter tours based on the selected destination
  const filteredTours = tours.filter((tour) =>
    selectedDestination ? tour.destination === selectedDestination : true
  );

  if (loading) {
    return <p>Loading tours...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (filteredTours.length === 0) {
    return <p>No tours available for the selected destination.</p>;
  }

  return (
    <div className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default Gallery;