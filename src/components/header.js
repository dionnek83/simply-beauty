import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "../components/header.css";
import Dropdown from "../components/Dropdown";

// Icons
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Header = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  let history = useHistory();
  const [query, setQuery] = useState(null);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    setSearchData([]);
    const search = async () => {
      const { data } = await axios.get(
        "https://simply-beauty-php.herokuapp.com/api/search.php?query=" + query
      );

      setSearchData(data);

      history.push({
        pathname: "/search",
        state: {
          searchResults: searchData,
          prevPath: history.location.pathname,
          search: query,
        },
      });
    };

    if (query) {
      search();
    } else {
      setSearchData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <header>
        <nav>
          <h1 className="logo">
            <Link className="logo-link" to="/">
              Simply Beauty
            </Link>
          </h1>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? <CgClose /> : <CgMenuRight />}
          </div>

          <div className={"nav-links" + (click ? " nav-open" : " hidden")}>
            <ul>
              <li onClick={() => setClick(false)}>
                <Link to="/" className="nav-link home">
                  Home
                </Link>
              </li>

              <li
                class="dropdown shop-link "
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={() => setClick(false)}
              >
                <Link to="/shop" className="nav-link">
                  Shop All
                </Link>
                {dropdown && <Dropdown />}
              </li>

              <li onClick={() => setClick(false)}>
                <Link to="#" className="nav-link">
                  About Us
                </Link>
              </li>
              <li onClick={() => setClick(false)}>
                <Link to="/about" className="nav-link">
                  Need Help ?
                </Link>
              </li>

              {/* search bar */}
              <span>
                <input
                  className="search"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
                <button className="search-button">
                  <IoSearchOutline />
                </button>
              </span>
            </ul>
          </div>

          {/* account and cart buttons */}
          <div className="container ">
            <button className="header-icon btn">
              <Link to="/account" className="cart-link">
                <IoPersonOutline />
              </Link>
            </button>
            <button className="header-icon btn">
              <Link to="/cart" className="cart-link">
                <AiOutlineShoppingCart />
              </Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
