import React, { Component } from "react";
import axios from "axios";
import "./productPage.css";
import Product from "../components/product";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const API_PATH =
 "https://www.dionne.infinityfreeapp.com/beautyPHP/api/addToCart.php/";

//const API_PATH = "http://localhost/beautyPHP/api/addToCart.php";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      productData: [],
      additionalInfo: [],
      relatedProducts: [],
      buttonColor: "not-chosen",
      clicked: false,
      qty: 1,
      price: 0,
      totalPrice: 0,
      lengthSelected: 0,
      product_id: "",
      length_ID: "",
      options: [],
    };
  }

  componentDidMount() {
    Promise.all([
      axios
        .get(
          "https://www.dionne.infinityfreeapp.com/beautyPHP/api/getProductByID.php?id=" +
            this.props.id
        )
        .then((res) => {
          this.setState({ data: res.data });
        }),

      axios
        .get(
          "https://www.dionne.infinityfreeapp.com/beautyPHP/api/additionalInfo.php?id=" +
            this.props.id
        )
        .then((res) => {
          this.setState({ additionalInfo: res.data });
        }),

      axios
        .get("https://www.dionne.infinityfreeapp.com/beautyPHP/api/getProductsMain.php")
        .then((res) => {
          this.setState({ relatedProducts: res.data });
        }),
    ]);
  }

  sendToCart(id, price, quantity) {
    if (this.state.clicked === false || this.state.clicked === null) {
      NotificationManager.error(
        "Please choose your desired length and quantity",
        "Couldn't add product to Cart ",
        3000
      );
    } else {
      fetch(`${API_PATH}`, {
        method: 'POST',
        body: JSON.stringify({
          Total_Cost: quantity * price,
                Quantity: quantity,
                Price_Per_Product: price,
                Product_ID: this.state.product_id,
                Hair_Length_ID: this.state.length_ID,
              
        }),
        headers: {
           'Accept': 'application/json',

        },
     })
     .then((result) => {
            if (result.status !== 200) {
              NotificationManager.error(result.data[0], "Error adding to cart ");
            } else {
              NotificationManager.success(
                "Successfully added product to cart",
                "Add product to Cart"
              );
            }
       
          })
          .catch((e) => {
            console.log(e);
          });

     
      

        }

   
  }

  clickHappens(id, Length, price, product_id) {
    this.setState((prevState) => ({
      clicked: prevState.clicked === id ? null : id,
      price: parseInt(price),
    }));
    this.setState({ length_ID: id });
    this.setState({ lengthSelected: Length });
    this.setState({ product_id: product_id });
  }

  render() {
    return (
      <>
        <section className="product-details-page">
          {this.state.data.map((product) => {
            return (
              <>
                <div className="product-details-container">
                  <div className="product-details-image-container">
                    <img
                      src={product["Image"]}
                      alt={product["Description"]}
                    ></img>
                  </div>
                  <div className="product-details-content-container">
                    <h1>{product["Description"]}</h1>
                    <p className="hair-length">Hair Length</p>
                    <div className="length-container">
                      {this.state.additionalInfo.map((info, index) => {
                        return (
                          <span
                            key={index}
                            className={
                              this.state.clicked === info["Hair_Length_ID"]
                                ? "chosen"
                                : "not-chosen"
                            }
                            onClick={() =>
                              this.clickHappens(
                                info["Hair_Length_ID"],
                                info["Length"],
                                info["Price"],
                                product["Product_ID"]
                              )
                            }
                          >
                            {info["Length"]}"
                          </span>
                        );
                      })}
                    </div>

                    <div className="quantity-price-container">
                      <p className="quantity">
                        Quantity
                        {this.state.additionalInfo.map((info) => {
                          if (info["Hair_Length_ID"] === this.state.clicked) {
                            return (
                              <select
                                value={this.state.qty}
                                onChange={(e) =>
                                  this.setState({
                                    qty: e.target.value,
                                  })
                                }
                              >
                                {[
                                  ...Array(parseInt(info["Quantity"])).keys(),
                                ].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            );
                          }
                        })}
                      </p>
                      <button
                        className="cart-button"
                        onClick={() =>
                          this.sendToCart(
                            product["Product_ID"],

                            this.state.price,

                            this.state.qty
                          )
                        }
                      >
                        <AiOutlineShoppingCart />
                      </button>
                    </div>
                    <p className="total-price">
                      {this.state.additionalInfo.map((info) => {
                        if (info["Hair_Length_ID"] === this.state.clicked) {
                          return "N$ " + this.state.price * this.state.qty;
                        }
                      })}
                    </p>
                  </div>
                </div>
                <div className="related-products-container">
                  <h2>Related Products</h2>
                  <div className="related-products">
                    {this.state.relatedProducts.map((rProduct) => {
                      if (
                        rProduct["Category_ID"] === product["Category_ID"] &&
                        rProduct["Product_ID"] !== product["Product_ID"]
                      ) {
                        return (
                          <Product
                            image={rProduct["Image"]}
                            id={rProduct["Product_ID"]}
                            desc={rProduct["Description"]}
                          />
                          // console.log(rProduct)
                        );
                      }
                    })}
                  </div>
                </div>
              </>
            );
          })}
          <NotificationContainer />
        </section>
      </>
    );
  }
}

export default ProductPage;
