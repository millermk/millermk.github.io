import React from 'react';
import { NavLink as RouterNavLink} from 'react-router-dom';
import { Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap';
import headshot from'../Media/headshot.png';

export default function HomeJumbotron() {
    return (
        <div className="bg-light mb-4 p-0">
            <Container>
                <Row >
                    <Col className="px-0 mt-2 d-none d-md-flex justify-content-end" >
                        <Nav >
                            <NavItem><NavLink className="nav-link-overrides ps-0 pe-3" href={/* eslint-disable no-useless-concat*/"mail"+"to:millermk"+"@outlook.com"/* eslint-enable no-useless-concat*/} download>Email Me</NavLink></NavItem>
                            <NavItem><NavLink className="nav-link-overrides ps-0 pe-3" href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>My CV (pdf)</NavLink></NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row className="align-items-end">
                    <Col className="d-none d-md-block" md="4" lg="3" xl="2">
                        <img className="header-img" src={headshot} alt="Headshot of Matthew Miller"/>
                    </Col>
                    <Col md="8" lg="9">
                        <RouterNavLink className="link-undecorated" to="/">
                            <h1 className="display-3">Matthew Miller</h1>
                        </RouterNavLink>
                        <p className="lead">Researching <b>interfaces</b> and <b>tools</b> for maintaining connectedness through <b>video chat</b>. Currently, Research Intern with Microsoft Research. Ph.D. completed with the HCI Lab at the University of Saskatchewan.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
