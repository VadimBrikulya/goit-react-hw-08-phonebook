import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 5,
    fontWeight: 700,
    color: "white",
  },
  activeLink: {
    color: "greenyellow",
    // outline: "3px solid teal"
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
