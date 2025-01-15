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
          <div className="icon-label">
            <FaTelegramPlane title="Telegram" className="chat-icon telegram-icon" />
            <span className="icon-text">Telegram</span>
          </div>
          <div className="icon-label">
            <FaWhatsapp title="WhatsApp" className="chat-icon whatsapp-icon" />
            <span className="icon-text">WhatsApp</span>
          </div>
          <div className="icon-label">
            <FaCommentDots title="Live Chat" className="chat-icon livechat-icon" />
            <span className="icon-text">Live Chat</span>
          </div>
        </div>
      ),
    },
    {
      icon: <FaShareAlt />,
      title: "Social",
      content: (
        <div className="social-icons">
          <div className="icon-label">
            <FaTelegramPlane title="Telegram" className="social-icon telegram-icon" />
            <span className="icon-text">Telegram</span>
          </div>
          <div className="icon-label">
            <FaInstagram title="Instagram" className="social-icon instagram-icon" />
            <span className="icon-text">Instagram</span>
          </div>
          <div className="icon-label">
            <FaTwitter title="Twitter" className="social-icon twitter-icon" />
            <span className="icon-text">Twitter</span>
          </div>
          <div className="icon-label">
            <FaLinkedin title="LinkedIn" className="social-icon linkedin-icon" />
            <span className="icon-text">LinkedIn</span>
          </div>
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
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-control">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-control">
                <label htmlFor="orderNo">Order no.</label>
                <input type="text" id="orderNo" />
              </div>
            </div>
            <div className="form-control textarea-control">
              <label htmlFor="query" className="textarea-label">Your Query</label>
              <textarea id="query"></textarea>
            </div>
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
