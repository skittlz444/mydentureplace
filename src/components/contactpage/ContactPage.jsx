import React from "react";
import ContactForm from "@c/contactform/ContactForm";
import styles from "./styles/ContactPage.module.css";

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetInTouchClick = this.handleGetInTouchClick.bind(this);
  }

  handleGetInTouchClick(e) {
    alert("Coming soon");
  }

  render() {
    return (
      <React.Fragment>
        <ContactForm />
      </React.Fragment>
    );
  }
}
