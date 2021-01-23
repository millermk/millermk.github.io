import React from 'react';
import { Container } from 'reactstrap';
import Publication from '../Models/Publication';
import PublicationSummary from './PublicationSummary';

export default function Publications(props: {publications: Publication[]}) {
    return (
        <Container className="mt-2">
            {props.publications.map(p => (<PublicationSummary publication={p} />))}
        </Container>
    );
}
