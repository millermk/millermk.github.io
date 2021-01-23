import React from 'react';
import { Row } from 'reactstrap';
import Project from '../Models/Project';

export default function ProjectSummary(props: {project: Project}) {
    return (
        <Row className="bg-light mb-2 py-2 px-4">
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
        </Row>
    );
}
