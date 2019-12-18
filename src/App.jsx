import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "~/shared.module.css";
import WOW from "wowjs";

import Home from "@c/home/Home";
import ContactHeader from "@s/contactheader/ContactHeader";
import Footer from "@s/footer/Footer";
import NavBar from "@s/navbar/NavBar";

require("animate.css");
require("bootstrap");

const Page404 = () => (
  <div align="center">
    <div className="Image-Div">
      <video
        src={require("./components/home/img/video.mp4")}
        className="Home-Image"
        autoPlay
        loop
      />
      <div className="NotFound">
        <span>404</span>
        <br />
        <span>Not Found</span>
      </div>
    </div>
  </div>
);

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
            <Route component={Page404} />
          </div>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
