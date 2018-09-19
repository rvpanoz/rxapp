import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "components/layout/loader";

import styles from "./styles.css";

function Header({ loading }) {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="#" className="navbar-brand mr-2">
          RXTodo
        </a>
      </section>
      <section className="navbar-center">
        {loading && <Loader />}
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
