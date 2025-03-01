import React from "react";
import axios from "axios";
import Product from "./product";
import Carousel from "react-elastic-carousel";
import "./carousel.css";

class Products_Carousel extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };

    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 375, itemsToShow: 1 },
      { width: 500, itemsToShow: 2 },
      { width: 900, itemsToShow: 3 },
      { width: 1024, itemsToShow: 3 },
    ];
  }

  //retrieves all hair products
  componentDidMount() {
    axios
      .get("https://www.dionne.infinityfreeapp.com/beautyPHP/api/getProductsMain.php")
      .then((res) => {
        this.setState({ data: res.data });
      });
  }

  render() {
    //a carousel is used to display hair products
    return (
      <Carousel breakPoints={this.breakPoints}>
        {this.state.data.map((product) => {
          return (
            <Product
              key={product["Product_ID"]}
              image={product["Image"]}
              id={product["Product_ID"]}
              desc={product["Description"]}
            />
          );
        })}
      </Carousel>
    );
  }
}
export default Products_Carousel;
