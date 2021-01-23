import React, { useState } from 'react';
import { NavLink as RouterNavLink} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavBar() {
    
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container fluid className="bg-light">
            <Container>
                <Navbar className="px-0" color="light" expand="md">
                    <NavbarBrand className="mr-2"><RouterNavLink className="link-unstyled" to="/">Matthew Miller</RouterNavLink></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem><NavLink><RouterNavLink to="/projects">Projects</RouterNavLink></NavLink></NavItem>
                            <NavItem><NavLink><RouterNavLink to="/publications">Publications</RouterNavLink></NavLink></NavItem>
                            <NavItem><NavLink><RouterNavLink to="/experience">Experience</RouterNavLink></NavLink></NavItem>
                            <NavItem><NavLink><RouterNavLink to="/service">Service</RouterNavLink></NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </Container>
    );
}
