import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';

const publicationsImage = require('../Media/publications.jpg').default;
const projectsImage = require('../Media/projects.jpg').default;
const serviceImage = require('../Media/service.jpg').default;
const experienceImage = require('../Media/experience.jpg').default;

export default function Overview() {
    return (
        <Container>
            <Row>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={projectsImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Projects</CardTitle>
                            <CardText>Research projects past and present.</CardText>
                            <Link to="/projects">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={publicationsImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Publications</CardTitle>
                            <CardText>Papers I've authored and co-authored.</CardText>
                            <Link to="/publications">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={serviceImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Service</CardTitle>
                            <CardText>Conference, university, and community involvement.</CardText>
                            <Link to="/service">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={experienceImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Experience</CardTitle>
                            <CardText>Teaching and internship experience.</CardText>
                            <Link to="/experience">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" className="pb-4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">My CV</CardTitle>
                            <CardText>In addition to the information on this site, you can access complete CV as a <a href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>pdf download</a>.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
