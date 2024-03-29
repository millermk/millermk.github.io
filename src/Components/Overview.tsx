import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './Overview.css';

import publicationsImage from '../Media/publications.jpg';
import projectsImage from '../Media/projects.jpg';
import serviceImage from '../Media/service.jpg';
import experienceImage from '../Media/experience.jpg';
import portfolioImage from '../Media/portfolio.jpg';

export default function Overview() {
    return (
        <Container>
            <Row>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={projectsImage} alt="A person video chatting on a couch with a laptop on her lap" />
                        <CardBody>
                            <CardTitle tag="h5"><Link className="router-link-overrides" to="/projects">Projects</Link></CardTitle>
                            <CardText>Selected and ongoing research projects.</CardText>
                            <Link to="/projects">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={publicationsImage} alt="A wearing headphones and holding a cup of coffee while video chatting" />
                        <CardBody>
                            <CardTitle tag="h5"><Link className="router-link-overrides" to="/publications">Publications</Link></CardTitle>
                            <CardText>Papers I've authored and co-authored.</CardText>
                            <Link to="/publications">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={serviceImage} alt="An audience in an auditorium with a large camera pointed at the stage" />
                        <CardBody>
                            <CardTitle tag="h5"><Link className="router-link-overrides" to="/service">Service</Link></CardTitle>
                            <CardText>Conference, university, and community involvement.</CardText>
                            <Link to="/service">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={experienceImage} alt="A computer lab with 6 computers at desks" />
                        <CardBody>
                            <CardTitle tag="h5"><Link className="router-link-overrides" to="/experience">Experience</Link></CardTitle>
                            <CardText>Teaching and internship experience.</CardText>
                            <Link to="/experience">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="pb-4">
                    <Card>
                        <CardImg top width="100%" src={portfolioImage} alt="A sketch of a user interface" />
                        <CardBody>
                            <CardTitle tag="h5"><Link className="router-link-overrides" to="/portfolio">Portfolio</Link></CardTitle>
                            <CardText>Design and programming experience.</CardText>
                            <Link to="/portfolio">See more</Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" className="pb-4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">CV and Contact</CardTitle>
                            <CardText>In addition to the information on this site, you can access my complete CV as a <a href={(process.env.PUBLIC_URL || "/") + 'matthew-miller-cv.pdf'} download>pdf download</a> or contact me by <a href={/* eslint-disable no-useless-concat*/"mail"+"to:millermk"+"@outlook.com"/* eslint-enable no-useless-concat*/} download>email</a> if you'd like to get in touch.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
