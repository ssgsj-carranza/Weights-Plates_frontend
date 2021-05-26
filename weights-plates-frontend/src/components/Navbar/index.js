import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                 Weights and Plates 
              </NavLogo>
              <MobileIcon>
                  <FaBar/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="about">About</NavLinks>
                  </NavItem>
              </NavMenu>
            </NavbarContainer>  
        </Nav>
        </>
    );
};

export default Navbar
