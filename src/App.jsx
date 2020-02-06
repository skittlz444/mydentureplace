import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Image } from 'react-bootstrap';
import "~/shared.module.css";
import WOW from "wowjs";

import ContactHeader from "@s/contactheader/ContactHeader";
import Footer from "@s/footer/Footer";
import NavBar from "@s/navbar/NavBar";
import loadingImage from '@s/notfound/img/loading.gif';

require("animate.css");
require("bootstrap");

export default class App extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        const homePromise = import('./components/home/Home');
        const notFoundPromise = import('./components/shared/notfound/NotFound');
        const contactPromise = import('./components/contactpage/ContactPage');
        const aboutUsPromise = import('./components/aboutuspage/AboutUsPage');
        const FAQPromise = import('./components/faqpage/FAQPage');
        const FindUsPromise = import('./components/finduspage/FindUsPage');
        const PrivacyPolicyPromise = import('./components/privacypage/PrivacyPolicyPage');
        const TermOfUsePromise = import('./components/termofusepage/TermOfUsePage');
        const DisclaimerPromise = import('./components/disclaimerpage/DisclaimerPage');

        const Home = React.lazy(() => homePromise);
        const NotFound = React.lazy(() => notFoundPromise);
        const ContactPage = React.lazy(() => contactPromise);
        const AboutUsPage = React.lazy(() => aboutUsPromise);
        const FAQPage = React.lazy(() => FAQPromise);
        const FindUsPage = React.lazy(() => FindUsPromise);
        const PrivacyPolicyPage = React.lazy(() => PrivacyPolicyPromise);
        const TermOfUsePage = React.lazy(() => TermOfUsePromise);
        const DisclaimerPage = React.lazy(() => DisclaimerPromise);

        const LoadingMessage = () => (
            <div style={{ textAlign: "center" }}>
                <Image src={loadingImage} />
                <h1 style={{ display: "block", margin: "auto", paddingTop: "40px" }}>"Please wait while the page loads..."</h1>
            </div>
        )

        return (
            <React.Fragment>
                <Router>
                    <ContactHeader />
                    <NavBar />
                    <Suspense fallback={<LoadingMessage />}>
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Route exact path="/home" component={Home} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/aboutus" component={AboutUsPage} />
                            <Route path="/faq" component={FAQPage} />
                            <Route path="/findus" component={FindUsPage} />
                            <Route path="/privacypolicy" component={PrivacyPolicyPage} />
                            <Route path="/termofuse" component={TermOfUsePage} />
                            <Route path="/disclaimer" component={DisclaimerPage} />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                    <Footer />
                </Router>
            </React.Fragment>
        );
    }
}
