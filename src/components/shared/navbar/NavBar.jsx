import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import styles from "./styles/NavBar.module.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(el) {
    var offset = document.getElementById("navbar").offsetHeight;
    offset = offset > 150 ? 56 : offset;
    setTimeout(() => {
      window.scrollTo({
        top: el.offsetTop - offset,
        left: 0,
        behavior: "smooth"
      });
    }, 300);
  }

  render() {
    return (
      <Navbar
        id="navbar"
        expand="md"
        collapseOnSelect
        sticky="top"
        className={styles.navBar + " justify-content-end flex"}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Container
            className={styles.linkContainer + " justify-content-end flex"}
          >
            <Nav className={styles.nav}>
              <Nav.Link as="span" eventKey>
                <Link
                  className={" nav-link"}
                  to={"/home#home"}
                  scroll={el => this.scroll(el)}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link as="span" eventKey>
                <Link
                  className={" nav-link"}
                  to={"/home#ourclinic"}
                  scroll={el => this.scroll(el)}
                >
                  Our Clinic
                </Link>
              </Nav.Link>
              <Nav.Link as="span" eventKey>
                <Link
                  className={" nav-link"}
                  to={"/contact"}
                  scroll={el => this.scroll(el)}
                >
                  Send us a Message!
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
