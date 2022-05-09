import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import "./Chat.style.scss";
import { FiSend } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";

const Chat = ({ setStartChat, startChat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getChat = async () => {
      getDocs(collection(db, "messages"))
        .then((storeData) => {
          setMessages(
            storeData.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getChat();
  }, []);

  return (
    <div className="support-chat" style={{right: startChat ? 0 : '-30rem'}}>
      <div className="support-chat-close" onClick={() => setStartChat(false)}>
        <RiCloseCircleFill />
      </div>
      <div className="support-chat-message">
        <div className="support-message">
          <p>Test message is here</p>
        </div>
        <div className="user-message">
          <p>Test answer is here</p>
        </div>
      </div>
      <form className="support-chat-input">
        <input type="text" name="text" placeholder="Aa" />
        <button type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default Chat;
