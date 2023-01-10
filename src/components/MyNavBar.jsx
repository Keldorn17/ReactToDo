import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

export const MyNavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="sm" dark color="dark" fixed="top">
        <NavbarBrand href="/">🙈</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="counter">
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={isLoggedIn ? "todo" : "login"}>
                Todo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="products">
                Products
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            { !isLoggedIn ? 
            <NavItem>
              <NavLink className="nav-link" to="login">
                Login
              </NavLink>
            </NavItem>
            :
            <NavItem>
              <NavLink className="nav-link" to="/" onClick={() => setIsLoggedIn(false)}>
                Logout
              </NavLink>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
