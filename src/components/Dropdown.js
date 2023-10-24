import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li className="nav-link">
          <Link
            to="/"
            onClick={() => setClick(false)}
            className="nav-link "
          >
            Lace Front Wigs
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/"
            onClick={() => setClick(false)}
            className="nav-link "
          >
            Clip Ins
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/"
            onClick={() => setClick(false)}
            className="nav-link "
          >
            Bundles
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
