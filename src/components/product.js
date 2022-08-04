import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Product = (props) => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="product-card" onClick={refreshPage}>
      <Link to={"/product/" + props.id}>
        <img src={props.image} alt={props.id}></img>
      </Link>
      <p>{props.desc.substring(0, 70)}</p>
      <div className="options">
        <div className="price">{"N$ 1000"}</div>
        <div>
          <button>
            {" "}
            <AiOutlineShoppingCart />
          </button>
          <button>
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
