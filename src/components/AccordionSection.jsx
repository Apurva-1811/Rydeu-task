import React from "react";
import "./AccordationSection.css";
import { FaComments, FaTelegramPlane, FaWhatsapp, FaCommentDots, FaShareAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Accordion } from "react-bootstrap";

const AccordionSection = () => {
  const accordionItems = [
    {
      icon: <FaComments />,
      title: "Chat",
      content: (
        <div className="chat-icons">
          <FaTelegramPlane title="Telegram" className="chat-icon" />
          <FaWhatsapp title="WhatsApp" className="chat-icon" />
          <FaCommentDots title="Live Chat" className="chat-icon" />
        </div>
      ),
    },
    {
      icon: <FaShareAlt />,
      title: "Social",
      content: (
        <div className="social-icons">
          <FaTelegramPlane title="Telegram" className="social-icon" />
          <FaInstagram title="Instagram" className="social-icon" />
          <FaTwitter title="Twitter" className="social-icon" />
          <FaLinkedin title="LinkedIn" className="social-icon" />
        </div>
      ),
    },
    {
      icon: <FaEnvelope />,
      title: "Send Query",
      content: (
        <form className="query-form">
          <div className="form-group">
            <div className="form-row">
              <input type="text" placeholder="Name" className="form-control" />
              <input type="email" placeholder="Email" className="form-control" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" className="form-control" />
              <input type="text" placeholder="Order no." className="form-control" />
            </div>
            <textarea placeholder="Your Query" className="form-control query-textarea"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      ),
    },
  ];

  return (
    <div className="accordion-section">
      <Accordion>
        {accordionItems.map((item, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <div className="header-content">
                <span className="icon">{item.icon}</span>
                <span className="title">{item.title}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;


