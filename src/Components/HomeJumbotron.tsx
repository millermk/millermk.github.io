import React from 'react';
import { NavLink} from 'react-router-dom';
import { Col, Container, Jumbotron, Row } from 'reactstrap';

const headshot = require('../Media/headshot.png').default;

export default function HomeJumbotron() {
    return (
        <Jumbotron className="pb-0 pt-5" fluid>
            <Container>
                <Row className="align-items-end">
                    <Col className="d-none d-md-block" md="4" lg="3">
                        <img className="header-img" src={headshot} alt="Headshot of Matthew Miller"/>
                    </Col>
                    <Col md="8" lg="9">
                        <NavLink className="link-undecorated" to="/">
                            <h1 className="display-3">Matthew Miller</h1>
                        </NavLink>
                        <p className="lead">Researching <b>interfaces</b> and <b>tools</b> for maintaining connectedness through <b>video chat</b>. Ph.D. Candidate in the Human-Computer Interaction Lab at the University of Saskatchewan.</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
