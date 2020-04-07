import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand >
      <NavLink  class="navbar-brand" to="/">
        Home Pantry
      </NavLink>
    </Navbar.Brand>

    <Nav className="mr-auto flex-row">
      <Nav.Link>
        <NavLink exact className="navbar-link" to="/" activeClassName="navbar-link-active">
          Home
        </NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink exact className="navbar-link ml-2" to="/shoppinglist" activeClassName="navbar-link-active">
          Shopping List
        </NavLink>
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;
