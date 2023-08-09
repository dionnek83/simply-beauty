import React from "react";
import axios from "axios";
import Slide from "react-reveal/Slide";

class Categories extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://simplybeauty.000webhostapp.com/beautyPHP/api/getCategories.php")
      .then((res) => {
        this.setState({ data: res.data });
      });
  }

  render() {
    return this.state.data.map((result) => {
      return (
        <>
          <Slide bottom>
            <div className="category-container">
              <img src={result.Image} alt={result.Name}></img>
              <h3 className="">{result.Name}</h3>
            </div>
          </Slide>
        </>
      );
    });
  }
}

export default Categories;
