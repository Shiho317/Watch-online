import React, { useRef, useState } from "react";
import MatchedData from "./MatchedData";
import "./SearchEngine.style.scss";

const SearchEngine = ({ datas, setOpenSearch }) => {
  const inputRef = useRef(null);
  const [matchedData, setMatchedData] = useState(datas);

  const onChangeSearch = () => {
    const searchValue = inputRef.current.value;
    const filtered = datas.filter(
      (data) =>
        data.company.includes(searchValue.toUpperCase()) ||
        data.name.includes(searchValue.toUpperCase)
    );
    setMatchedData(filtered);
  };

  return (
    <>
      <input
        type="text"
        placeholder="key words here..."
        ref={inputRef}
        onChange={() => onChangeSearch()}
        className="search-engine-input"
      />
      <ul className="matched-lists">
        {matchedData.length > 0 ? (
          matchedData.map((ele) => (
            <MatchedData ele={ele} setOpenSearch={setOpenSearch} />
          ))
        ) : (
          <li>
            <p style={{ padding: "0 1rem" }}>No results matched</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default SearchEngine;
