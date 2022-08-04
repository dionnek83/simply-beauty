import React from "react";
import hero from "../images/hero-image.png";
import Categories from "../components/categories";
import ProductList from "../components/Carousel";
import "../pages/Home.css";
import Fade from "react-reveal/Fade";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <Fade left>
              <p>Get the most natural look at an affordable price.</p>
              <button className="btn">
                <Link className="shop-link" to="/shop">
                  Shop Now
                </Link>
              </button>
            </Fade>
          </div>
          <div className="image-container">
            <Fade right>
              <img src={hero} alt="hero"></img>
            </Fade>
          </div>
        </div>
      </section>
      <section className="categories">
        <h2>Categories</h2>
        <div className="categories-container">
          <Categories />
        </div>
      </section>
      <section className="about-us">
        <Fade bottom>
          <h2>Simply Beauty</h2>
          <p>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="btn">About Us</button>
        </Fade>
      </section>

      <section className="products">
        <FadeIn>
          <div className="">
            <ProductList />
          </div>
        </FadeIn>
      </section>
      <section className="purchase">
        <Fade bottom>
          <p className="dark-text">Purchase your first wig</p>

          <h1>Save up to 50% Off</h1>

          <p className="grey-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Duis aute irure dolor
          </p>

          <button className="btn">
            <Link className="shop-link" to="/shop">
              Shop
            </Link>
          </button>
        </Fade>
      </section>
      <section className="paragraphs">
        <Fade top>
          <div className="paragraph-container">
            <p className="sub-heading">Velit esse</p>
            <h2>Duis aute irure dolor</h2>
            <p className="content">
              Nulla facilisi morbi tempus iaculis urna id volutpat. Egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium
              vulputate.
            </p>
          </div>
        </Fade>
        <Fade top>
          <div className="paragraph-container">
            <p className="sub-heading">Velit esse</p>
            <h2>Duis aute irure dolor</h2>
            <p className="content">
              Nulla facilisi morbi tempus iaculis urna id volutpat. Egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium
              vulputate.
            </p>
          </div>
        </Fade>

        <Fade top>
          <div className="paragraph-container">
            <p className="sub-heading">Velit esse</p>
            <h2>Duis aute irure dolor</h2>
            <p className="content">
              Nulla facilisi morbi tempus iaculis urna id volutpat. Egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium
              vulputate.
            </p>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Home;
