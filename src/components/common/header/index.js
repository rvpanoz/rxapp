import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import Loader from "../loader";

function Header(props) {
  const { loading } = props;

  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="#" className="navbar-brand mr-2">
          RXTodo
        </a>
      </section>
      <section className="navbar-center">
        {loading === true && <Loader />}
      </section>
      <section className="navbar-section">
        <a href="#" className="btn btn-link">
          GitHub
        </a>
      </section>
    </header>
  );
}

export default Header;
