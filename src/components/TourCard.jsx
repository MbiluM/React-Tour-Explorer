import React from "react";

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2 className="tour-name">{name}</h2>
        <p className="tour-info">{info}</p>
        <p className="tour-price">${price}</p>
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;