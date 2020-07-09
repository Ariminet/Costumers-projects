import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../../SCSS/NavBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div id="header">
      <Navbar dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            id="brand"
            src="odder-massage-logo.png"
            alt="Odder Massage Logo"
          />
        </NavbarBrand>
        <NavbarToggler
          id="burger-menu"
          onClick={toggleNavbar}
          className="mr-2"
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav id="menu" navbar>
            <NavItem className="menu-item">
              <NavLink
                activeStyle={{
                  color: '#0483e4',
                  transition: 'ease-in-out 0.03s',
                }}
                className="nav-Link active"
                tag={Link}
                exact
                to="/"
              >
                FORSIDE
              </NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink
                activeStyle={{
                  color: '#0483e4',
                  transition: 'ease-in-out 0.03s',
                }}
                className="nav-Link"
                tag={Link}
                to="/ydelser"
              >
                YDELSER
              </NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink className="nav-Link sm_booking" href="">
                BOOK EN TID
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
