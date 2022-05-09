import React, { useState } from "react";
import "./CustomerSupport.style.scss";
import { FiPhoneCall } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import Chat from "../chat/Chat";

const CustomerSupport = () => {
  const [startChat, setStartChat] = useState(false);

  return (
    <div className="customer-support">
      <div className="layer-bg"></div>
      <div className="layer">
        <div className="title">
          <h1>WE SUPPORT 24/7</h1>
          <p>
            Want to get in touch? We would like to support you. Here is how you
            can reach us.
          </p>
        </div>
      </div>
      <div className="contact-way">
        <div className="phone-call">
          <div className="icon">
            <FiPhoneCall />
          </div>
          <div className="details">
            <h3>+1 (234)-567-890</h3>
            <p>Open Hour: 8:30AM - 5:00PM (EVERY DAY)</p>
          </div>
        </div>
        <div className="online-chat">
          <div className="icon">
            <BsChatDots />
          </div>
          <div>
            <button onClick={() => setStartChat(true)}>Send a text</button>
          </div>
          <p>Open Hour: 24/7</p>
        </div>
      </div>
      <Chat setStartChat={setStartChat} startChat={startChat}/>
    </div>
  );
};

export default CustomerSupport;
