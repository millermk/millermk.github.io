import React from 'react';
import { Container } from 'reactstrap';
import Experience from '../Models/Experience';
import ExperienceSummary from './ExperienceSummary';

export default function Experiences(props: {experiences: Experience[]}) {
    return (
        <Container className="mt-2">
            {props.experiences.map(e => (<ExperienceSummary experience={e} />))}
        </Container>
    );
}
