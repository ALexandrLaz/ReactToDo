import React from "react";
import "./header.style.less";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to={`/todos`}>Todos</Link>
          </NavItem>
          <NavItem>
            <Link to={`/auth`}>Authorize</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}
