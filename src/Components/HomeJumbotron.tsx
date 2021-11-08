import React from 'react';
import { NavLink as RouterNavLink} from 'react-router-dom';
import { Col, Container, Jumbotron, Nav, Navbar, NavItem, NavLink, Row } from 'reactstrap';

const headshot = require('../Media/headshot.png').default;

export default function HomeJumbotron() {
    return (
        <Jumbotron className="p-0" fluid>
            <Container>
                <Navbar className="px-0 justify-content-end mb-3 d-none d-md-flex" light expand="xs">
                    <Nav navbar>
                        <NavItem><NavLink><a href={/* eslint-disable no-useless-concat*/"mail"+"to:millermk"+"@outlook.com"/* eslint-enable no-useless-concat*/} download>Email Me</a></NavLink></NavItem>
                        <NavItem><NavLink><a href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>My CV (pdf)</a></NavLink></NavItem>
                    </Nav>
                </Navbar>
                <Row className="align-items-end">
                    <Col className="d-none d-md-block" md="4" lg="3">
                        <img className="header-img" src={headshot} alt="Headshot of Matthew Miller"/>
                    </Col>
                    <Col md="8" lg="9">
                        <RouterNavLink className="link-undecorated" to="/">
                            <h1 className="display-3">Matthew Miller</h1>
                        </RouterNavLink>
                        <p className="lead">Researching <b>interfaces</b> and <b>tools</b> for maintaining connectedness through <b>video chat</b>. Ph.D. Candidate in the Human-Computer Interaction Lab at the University of Saskatchewan.</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
