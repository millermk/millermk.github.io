import React, { useState } from 'react';
import './NavBar.css'
import { NavLink as RouterNavLink} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavBar() {
    
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const close = () => setIsOpen(false);

    const getRouterNavLinkClass = (props: {isActive: boolean}) => props.isActive ? "nav-link-overrides-active my-1 pe-3" : "nav-link-overrides my-1 pe-3"

    return (
        <Container fluid className="bg-light">
            <Container>
                <Navbar className="px-0" color="light" light expand="md">
                    <NavbarBrand tag="span" className="mr-2"><RouterNavLink className="nav-link-overrides" to="/">Matthew Miller</RouterNavLink></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="justify-content-between">
                        <Nav navbar className="mr-auto">
                            <NavItem className="my-1"><RouterNavLink className={getRouterNavLinkClass} onClick={close} to="/projects">Projects</RouterNavLink></NavItem>
                            <NavItem className="my-1"><RouterNavLink className={getRouterNavLinkClass} onClick={close} to="/publications">Publications</RouterNavLink></NavItem>
                            <NavItem className="my-1"><RouterNavLink className={getRouterNavLinkClass} onClick={close} to="/experience">Experience</RouterNavLink></NavItem>
                            <NavItem className="my-1"><RouterNavLink className={getRouterNavLinkClass} onClick={close} to="/service">Service</RouterNavLink></NavItem>
                            <NavItem className="my-1"><RouterNavLink className={getRouterNavLinkClass} onClick={close} to="/portfolio">Portfolio</RouterNavLink></NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem className="my-1"><NavLink className={"nav-link-overrides link-primary p-0 pe-3"} href={/* eslint-disable no-useless-concat*/"mail"+"to:millermk"+"@outlook.com"/* eslint-enable no-useless-concat*/} download>Email Me</NavLink></NavItem>
                            <NavItem className="my-1"><NavLink className={"nav-link-overrides link-primary p-0"} href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>My CV (pdf)</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </Container>
    );
}
