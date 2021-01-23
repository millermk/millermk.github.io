import React from 'react';
import { Col, Row } from 'reactstrap';
import Experience from '../Models/Experience';

export default function ExperienceSummary(props: {experience: Experience}) {
    const yearDisplay = 
        props.experience.endYear === undefined ? props.experience.startYear + ' - ' :
        props.experience.startYear !== props.experience.endYear ? props.experience.startYear + ' - ' + props.experience.endYear :
        /* props.experience.startYear === props.experience.endYear */ props.experience.startYear
    return (
        <Row className="p-2 mb-lg-2 bg-light">
            <Col xs="12" lg="4">
                <h3>{yearDisplay}</h3>
                <div className="mb-2 mb-lg-0">{props.experience.title}, <i>{props.experience.org}</i></div>
            </Col>
            <Col xs="12" lg="8">
                <p>{props.experience.description}</p>
            </Col>
        </Row>
    );
}
