import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "~/shared.module.css";
import WOW from "wowjs";

import Home from "@c/home/Home";
import ContactPage from "@c/contactpage/ContactPage";
import ContactHeader from "@s/contactheader/ContactHeader";
import Footer from "@s/footer/Footer";
import NavBar from "@s/navbar/NavBar";

require("animate.css");
require("bootstrap");

export default class App extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <ContactHeader />
          <NavBar />
          <div>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={ContactPage} />
          </div>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
