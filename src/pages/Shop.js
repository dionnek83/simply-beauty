import React from "react";
import Product from "../components/product";
import axios from "axios";
import "./shop.css";

class Shop extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }
  // const Shop = () => {

  componentDidMount() {
    axios
      .get("https://www.dionne.infinityfreeapp.com/beautyPHP/api/getProductsMain.php")
      .then((res) => {
        this.setState({ data: res.data });
      });
  }
  render() {
    return (
      <>
        <section className="page shop-page">
          <div className="products-content">
            <h1>Categories</h1>
            <ul>
              <li>All Products</li>
              <li>Lace Wigs</li>
              <li>Clip Ins</li>
              <li>Hair Bundles</li>
            </ul>
            <h3>Shop by Price</h3>
            <ul>
              <li>N$ 0 - N$ 500</li>
              <li>N$ 500 - N$ 1000</li>
              <li>N$ 1000 - N$ 1500</li>
              <li>N$ 1500 - N$ 2000</li>
            </ul>
            <h3>Color</h3>

            {/* <span>1</span>
            <span>2</span>
            <span>3</span> */}
          </div>

          <div className="products-product">
            <div className="sort-by">
              <label for="sort">Sort By</label>
              <select name="Sort by :" id="sort">
                <option value="A to Z">A to Z</option>
                <option value="Price : Ascending">Price : Ascending</option>
                <option value="Price : Descening">Price : Descening</option>
                <option value="BestSelling">Best Selling</option>
                <option value="Oldest to Newest">Oldest to Newest</option>
              </select>
            </div>

            <div class="shop-products-container">
              <div className="shop-products">
                {this.state.data.map((product) => {
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
        </section>
      </>
    );
  }
}

export default Shop;
