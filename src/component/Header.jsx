import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">토익 영단어 (고급)</Link>
      </h1>
      <div>
        <Link to="/search" className="link">
          단어 검색
        </Link>
        <button className="btn">
          <Link to="/add-word" className="link">
            단어 추가
          </Link>
        </button>
        <button className="btn">
          <Link to="/add-day" className="link">
            Day 추가
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
