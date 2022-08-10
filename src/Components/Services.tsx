import React from 'react';
import { Container } from 'reactstrap';
import Service from '../Models/Service';
import ServiceSummary from './ServiceSummary';

export default function Services(props: {services: Service[]}) {
    return (
        <Container className="mt-2">
            {props.services.map((s, i) => (<ServiceSummary service={s} key={i} />))}
        </Container>
    );
}
