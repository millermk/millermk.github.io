import React, { useState } from 'react';
import { Row, Col, CarouselIndicators, CarouselControl, Button } from 'reactstrap';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import './PortfolioItemSummary.css';
import PortfolioItem from '../Models/PortfolioItem';

export default function PortfolioItemSummary(props: {portfolioItem: PortfolioItem, reverse: boolean}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.portfolioItem.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.portfolioItem.images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const description = props.portfolioItem.images[activeIndex].description;

    return (
        <Row className="bg-light mb-2 p-2 align-items-center">
            <Col xs={12}>
                <h3>{props.portfolioItem.name}: <small className="text-muted">{props.portfolioItem.extendedName}</small></h3>
                <p className="lead">{props.portfolioItem.description}</p>
                {props.portfolioItem.link ? <Button className='mb-4' color='primary' target="_blank" rel="noreferrer" href={props.portfolioItem.link}>View the live site</Button> : null }
            </Col>
            <Col className={props.reverse ? "order-lg-last" : ""} xs={12} lg={8}>
                <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false} dark={true} >
                    <CarouselIndicators items={props.portfolioItem.images} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                    {props.portfolioItem.images.map((im, i) => 
                        <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={i}>
                            <img className="w-100 mb-2" src={(process.env.PUBLIC_URL || "/") + 'media/' + im.src} alt={im.alt}></img>
                        </CarouselItem>
                    )}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                </Carousel>
            </Col>
            <Col xs={12} lg={4}>
                {
                    typeof description === "string" ? 
                        <p>{props.portfolioItem.images[activeIndex].description}</p>
                            :
                        <ul>{description.map((d, i) => <li key={i}>{d}</li>)}</ul>
                }
            </Col>
        </Row>
    );
}
