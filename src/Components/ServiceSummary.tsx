import React from 'react';
import { Col, Row } from 'reactstrap';
import Service from '../Models/Service';

export default function ServiceSummary(props: {service: Service}) {
    const yearDisplay = 
        props.service.endYear === undefined ? props.service.startYear + ' - ' :
        props.service.startYear !== props.service.endYear ? props.service.startYear + ' - ' + props.service.endYear :
        /* props.service.startYear === props.service.endYear */ props.service.startYear
    return (
        <Row className="p-2 mb-lg-2 bg-light">
            <Col xs="12" lg="4">
                <h3>{yearDisplay}</h3>
                <div className="mb-2 mb-lg-0">{props.service.title}, <i>{props.service.org}</i></div>
            </Col>
            <Col xs="12" lg="8">
                <p>{props.service.description}</p>
            </Col>
        </Row>
    );
}
