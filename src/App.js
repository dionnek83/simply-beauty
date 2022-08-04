import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Bundles from "./pages/Bundles";
import Clip from "./pages/Clip";
import Lace from "./pages/Lace";
import Cart from "./pages/cart";
import Footer from "./components/footer";
import Account from "./pages/account";
import Product from "./pages/productPage";
import Search from "./pages/searchResults";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        {/* <Route exact path="/about">
          <About />
        </Route> */}
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/clip">
          <Clip />
        </Route>
        <Route exact path="/bundles">
          <Bundles />
        </Route>
        <Route exact path="/lace">
          <Lace />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route
          exact
          path="/product/:id"
          render={({ match }) => <Product id={match.params.id} />}
        />
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

// function About() {
//   return <h2>About</h2>;
// }

export default App;
