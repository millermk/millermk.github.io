import React from 'react';
import { Container } from 'reactstrap';
import PortfolioItem from '../Models/PortfolioItem';
import PortfolioItemSummary from './PortfolioItemSummary';

export default function PortfolioItems(props: {portfolioItems: PortfolioItem[]}) {
    return (
        <Container className="mt-2">
            {props.portfolioItems.map((p, i) => (<PortfolioItemSummary portfolioItem={p} key={i} reverse={i % 2 === 1} />))}
        </Container>
    );
}
