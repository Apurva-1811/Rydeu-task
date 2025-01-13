import React from "react";
import { FaQuestionCircle, FaMapMarkerAlt } from "react-icons/fa";
import "./CardSection.css";

const CardSection = () => {
  const cards = [
    { icon: <FaQuestionCircle />, title: "FAQ", description: "Lorem ipsum doloor sit amet." },
    { icon: <FaMapMarkerAlt />, title: "Travel Guide", description: "Lorem ipsum doloor sit amet." },
    
  ];

  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={index}>
            <div className="card">
              <div className="card-icon">{card.icon}</div>
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
