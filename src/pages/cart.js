import React from "react";
import "../pages/cart.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      totalCost: [],
      cost: 0,
    };
  }

  componentDidMount() {
    Promise.all([
      axios
        .get("https://simply-beauty-php.herokuapp.com/api/getCartProducts.php")
        .then((res) => {
          this.setState({ data: res.data });
        }),
      axios
        .get("https://simply-beauty-php.herokuapp.com/api/Cost.php")
        .then((res) => {
          this.setState({ totalCost: res.data });
          this.state.totalCost.map((cost) => {
            this.setState({ cost: parseInt(cost["TotalCost"]) });
          });
        }),
    ]);
  }

  render() {
    return (
      <>
        <section className="cart-items page">
          {this.state.data.length !== 0 ? (
            <>
              <h1>Shopping Cart</h1>

              <div className="cart-page">
                <div className="cart-products">
                  {/* <CartItem /> */}
                  {this.state.data.map((product) => {
                    return (
                      <CartItem
                        image={product["Image"]}
                        id={product["Product_ID"]}
                        desc={product["Description"]}
                        hLength={product["Length"]}
                        qty={product["Quantity"]}
                        totalCost={product["Total_Cost"]}
                        totalQuantity={product["TotalQ"]}
                        cartID={product["Cart_ID"]}
                        cost={product["Price_Per_Product"]}
                      />
                    );
                  })}
                </div>

                <div className="receipt">
                  <h3>Order Summary</h3>
                  <table>
                    <tr>
                      <th>Subtotal</th>
                      <td>N$ {this.state.cost}.00</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>N$ 50.00</td>
                    </tr>
                    <tr className="total">
                      <th>Total</th>
                      <td>N$ {this.state.cost + 50}.00</td>
                    </tr>
                  </table>
                  <button>Checkout</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="empty-cart">
                <h1>Your cart is empty</h1>
                <button>
                  <Link to="/shop" className="link">
                    Start Shopping
                  </Link>
                </button>
              </div>
            </>
          )}
        </section>
      </>
    );
  }
}

export default Cart;
