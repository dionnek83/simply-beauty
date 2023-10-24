import React, { useEffect } from "react";
import Product from "../components/product";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./search.css";

const SearchResults = (props) => {
  let history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.state.search.length <= 1) {
      history.push({
        pathname: "/",
      });
    }
  }, [location.state.search]);

  console.log(location.state.search)

  return (
    <div>
      <h1 className="search-title">
        {" "}
        {location.state.searchResults.length} Search Result/s found for "
        {location.state.search} "
      </h1>

      <div className="related-products-container">
        <div className="related-products">
          {location.state.searchResults.map((product) => {
            return (
              <Product
                image={product["Image"]}
                id={product["Product_ID"]}
                desc={product["Description"]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
