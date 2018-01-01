import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>ReactSample</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/completedOrders'} exact>
          <NavItem>
            <Glyphicon glyph='completedOrders' /> Completed Orders
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/pendingOrders'} exact>
          <NavItem>
            <Glyphicon glyph='pendingOrders' /> Pending Orders
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
