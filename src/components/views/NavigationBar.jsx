import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar light expand="lg">
        <NavbarBrand href="/" style={{ color: '#e86632', fontWeight: 'bold' }}>
          <i className="fas fa-clipboard"></i>
          book my care
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/posts">
                <i className="fas fa-list-alt" style={{ color: 'blue' }}></i>
                All Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createpost">
                <i className="fas fa-gift" style={{ color: 'green' }}></i>
                Contribute Resource
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <i className="fas fa-info-circle" style={{ color: 'red' }}></i>
                About
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Placeholder for user information</NavbarText>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavigationBar;
