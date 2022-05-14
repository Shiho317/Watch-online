import React from "react";
import { useNavigate } from "react-router-dom";
import "./MatchedData.style.scss";

const MatchedData = ({ ele, setOpenSearch }) => {
  const navigate = useNavigate();

  const handleToDetails = () => {
    navigate(`/details/${ele.id}`);
    setOpenSearch(false)
  };

  return (
    <li className="matched-list" onClick={() => handleToDetails()}>
      <div className="matched-img">
        <img src={ele.image} alt="matched-item" />
      </div>
      <div className="matched-details">
        <p>{ele.name}</p>
        <p>/{ele.company}</p>
      </div>
    </li>
  );
};

export default MatchedData;
