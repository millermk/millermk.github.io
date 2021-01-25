import React, { useState } from 'react';
import './NavBar.css'
import { NavLink as RouterNavLink} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavBar() {
    
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const close = () => setIsOpen(false);

    return (
        <Container fluid className="bg-light">
            <Container>
                <Navbar className="px-0" color="light" light expand="md">
                    <NavbarBrand className="mr-2"><RouterNavLink to="/">Matthew Miller</RouterNavLink></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem><NavLink active={true}><RouterNavLink activeClassName="link-active" onClick={close} to="/projects">Projects</RouterNavLink></NavLink></NavItem>
                            <NavItem><NavLink active={true}><RouterNavLink activeClassName="link-active" onClick={close} to="/publications">Publications</RouterNavLink></NavLink></NavItem>
                            <NavItem><NavLink active={true}><RouterNavLink activeClassName="link-active" onClick={close} to="/experience">Experience</RouterNavLink></NavLink></NavItem>
                            <NavItem><NavLink active={true}><RouterNavLink activeClassName="link-active" onClick={close} to="/service">Service</RouterNavLink></NavLink></NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem><NavLink><a href={/* eslint-disable no-useless-concat*/"mail"+"to:millermk"+"@outlook.com"/* eslint-enable no-useless-concat*/} download>Email Me</a></NavLink></NavItem>
                            <NavItem><NavLink><a href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>My CV (pdf)</a></NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </Container>
    );
}
