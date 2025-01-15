import React from "react";
import { FaQuestionCircle, FaMapMarkerAlt } from "react-icons/fa";
import "./CardSection.css";

const CardSection = () => {
  const cards = [
    { icon: <FaQuestionCircle />, title: "FAQ", description: "Lorem ipsum doloor sit amet." },
    { icon: <FaMapMarkerAlt />, title: "Travel Guide", description: "Lorem ipsum doloor sit amet." },
  ];

  return (
    <div className="blue-background">
      <div className="card-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {/* Icon */}
            <div className="card-icon">{card.icon}</div>
            {/* Text Content */}
            <div className="card-content">
              <div className="card-title">{card.title}</div>
              <div className="card-description">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
