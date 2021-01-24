import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

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
                        <CardImg top width="100%" src={projectsImage} alt="A person video chatting on a couch with a laptop on her lap" />
                        <CardBody>
                            <CardTitle tag="h5">Projects</CardTitle>
                            <CardText>Selected and ongoing research projects.</CardText>
                            <Link to="/projects">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={publicationsImage} alt="A wearing headphones and holding a cup of coffee while video chatting" />
                        <CardBody>
                            <CardTitle tag="h5">Publications</CardTitle>
                            <CardText>Papers I've authored and co-authored.</CardText>
                            <Link to="/publications">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={serviceImage} alt="An audience in an auditorium with a large camera pointed at the stage" />
                        <CardBody>
                            <CardTitle tag="h5">Service</CardTitle>
                            <CardText>Conference, university, and community involvement.</CardText>
                            <Link to="/service">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={experienceImage} alt="A computer lab with 6 computers at desks" />
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
                            <CardText>In addition to the information on this site, you can access my complete CV as a <a href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>pdf download</a>.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
