import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import axios from "axios";

const CartItem = (props) => {
  function refreshPage() {
    window.location.reload();
  }

  const [qty, setQty] = useState(parseInt(props.qty));

  function removeProduct() {
    axios
      .get(
        "https://simplybeauty.000webhostapp.com/beautyPHP/api/deleteFromCart.php?id=" +
          props.cartID
      )
      .then((res) => {
        console.log(res);
      });
    refreshPage();
  }

  function updateQuantity(quantity) {
    setQty(quantity);
    axios
      .get(
        "https://simplybeauty.000webhostapp.com/beautyPHP/api/updateQty.php?id=" +
          props.cartID +
          "&qty=" +
          quantity
      )
      .then((res) => {
        console.log(res);
      });
    updateCost(quantity);
  }

  function updateCost(quantity) {
    axios
      .get(
        "https://simplybeauty.000webhostapp.com/beautyPHP/api/updateCost.php?id=" +
          props.cartID +
          "&cost=" +
          quantity * props.cost
      )
      .then((res) => {
        console.log(res);
      });
    refreshPage();
  }

  return (
    <div className="product">
      <button className="close-button" onClick={() => removeProduct()}>
        <CgClose />
      </button>
      <img src={props.image} alt={props.desc}></img>
      <div>
        <p>{props.desc}</p>
        <p> N$ {props.totalCost}</p>

        <p>{props.hLength} inches</p>

        <p>
          Quantity {"     "}
          <select value={qty} onChange={(e) => updateQuantity(e.target.value)}>
            {[...Array(parseInt(props.totalQuantity)).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </p>
      </div>
    </div>
  );
};
export default CartItem;
