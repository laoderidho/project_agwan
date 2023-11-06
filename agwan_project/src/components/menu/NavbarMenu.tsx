import React, { ReactNode } from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface NavbarMenuProps {
  children: ReactNode;
}

const NavbarMenu: React.FC<NavbarMenuProps> = (props) => {
  return (
    <>
      <Navbar expand="lg" bg='dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Konsul Sehat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className='justify-content-end'>
            <Link className='nav-link text-white m-2' to="/">Testing</Link>
            <NavDropdown title="Hello" className='text-white m-2'>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {props.children}
      </div>
    </>
  );
}

export default NavbarMenu;
