import React from 'react';
import { Container } from 'reactstrap';
import Project from '../Models/Project';
import ProjectSummary from './ProjectSummary';

export default function Projects(props: {projects: Project[]}) {
    return (
        <Container className="mt-2">
            {props.projects.map((p, i) => (<ProjectSummary project={p} key={i} />))}
        </Container>
    );
}
