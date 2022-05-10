import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Firebase";
import "./Chat.style.scss";
import { FiSend } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, resetChat } from "../../features/MessageSlice";

const Chat = ({ setStartChat, startChat }) => {
  const [inquiryInfo, setInquiryInfo] = useState({
    number: 0,
    order: "",
    timestamp: "",
  });

  const addToFirestore = async () => {
    const addInquiry = await addDoc(collection(db, "inquiry"), inquiryInfo);
    console.log("Data store Id: ,", addInquiry.id);
  };

  const [reply, setReply] = useState("");

  const [inquiryNumber, setInquiryNumber] = useState("");

  const onChangeHandler = (e) => {
    setReply(e.target.value);
  };

  const dispatch = useDispatch();

  const addedByCustomer = (e) => {
    e.preventDefault();
    console.log(reply.length);

    dispatch(
      addMessage({
        message: reply,
        user: "customer",
      })
    );

    setTimeout(() => {
      if (reply === "2" || reply === "3") {
        dispatch(
          addMessage({
            message: "Please provide your order number.",
            user: "company",
          })
        );
        setInquiryNumber(reply);
        setInquiryInfo({
          ...inquiryInfo,
          number: reply,
        });
      } else if (reply === "1" || reply === "4") {
        dispatch(
          addMessage({
            message:
              "Please contact us to 'uwatch_customer-support@mail.com' by email. Thank you for your understanding.",
            user: "company",
          })
        );
      } else if (reply.length > 6) {
        dispatch(
          addMessage({
            message:
              "Thank you for your information. Please check your information is correct and text me 'yes' or 'no' as your answer.",
            user: "company",
            option: [
              `About: ${messagesArr[0].option[Number(inquiryNumber) - 1]}`,
              `Order Number: ${reply}`,
            ],
          })
        );
        setInquiryInfo({
          ...inquiryInfo,
          order: reply,
          timestamp: serverTimestamp(),
        });
      } else if (reply === "yes") {
        dispatch(
          addMessage({
            message:
              "Thank you for answering. We will contact your email address that you registered in order form. Please be patient and thank you for your understanding.",
            user: "company",
          })
        );
        addToFirestore();
      } else if (reply === "no") {
        dispatch(
          addMessage({
            message: "Let me start again.",
            user: "company",
          })
        );
        dispatch(addMessage(messagesArr[0]));
      } else {
        dispatch(
          addMessage({
            message: "Please answer our question again.",
            user: "company",
          })
        );
      }
    }, 1000);

    setReply("");
  };

  const messagesArr = useSelector((state) => state.messages);

  const onChatClosed = () => {
    setStartChat(false);
    dispatch(resetChat());
  };

  return (
    <div className="support-chat" style={{ right: startChat ? 0 : "-30rem" }}>
      <div className="support-chat-close" onClick={() => onChatClosed()}>
        <RiCloseCircleFill />
      </div>
      <div className="support-chat-message">
        {messagesArr.map((text, index) => (
          <div
            key={index}
            className={
              text.user === "company" ? "support-message" : "user-message"
            }
          >
            <div className="text-popup">
              <p>{text.message}</p>
              {text.option && (
                <ul>
                  {text.option.map((option, index) => (
                    <li key={option}>
                      {index + 1}:{option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <form className="support-chat-input" onSubmit={(e) => addedByCustomer(e)}>
        <input
          type="text"
          name="text"
          placeholder="Aa"
          value={reply}
          onChange={(e) => onChangeHandler(e)}
        />
        <button type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default Chat;
