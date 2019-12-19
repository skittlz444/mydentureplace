import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "~/shared.module.css";
import WOW from "wowjs";

import Home from "@c/home/Home";
import ContactPage from "@c/contactpage/ContactPage";
import ContactHeader from "@s/contactheader/ContactHeader";
import Footer from "@s/footer/Footer";
import NavBar from "@s/navbar/NavBar";
import NotFound from "@s/notfound/NotFound";

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
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact path="/home" component={Home} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    );
  }
}
