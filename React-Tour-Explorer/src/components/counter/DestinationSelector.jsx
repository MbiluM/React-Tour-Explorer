import React from "react";

const DestinationSelector = ({ tours, selectedDestination, onDestinationChange }) => {
  // Extract unique destinations from the tours array
  const uniqueDestinations = [...new Set(tours.map((tour) => tour.destination))];

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Select a Destination:</label>
      <select
        id="destination"
        value={selectedDestination}
        onChange={(e) => onDestinationChange(e.target.value)}
      >
        <option value="">All Destinations</option>
        {uniqueDestinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;