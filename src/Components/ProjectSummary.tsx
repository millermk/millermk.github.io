import React from 'react';
import { Row, Col } from 'reactstrap';
import './ProjectSummary.css';
import Project from '../Models/Project';
import YoutubeEmbed from './YoutubeEmbed';

export default function ProjectSummary(props: {project: Project}) {
    return (
        <Row className="bg-light mb-2 py-2 px-4">
            <Col xs={12}>
                <h3>{props.project.name}</h3>
                <p>{props.project.description}</p>
            </Col>
            {props.project.youtubeVideo ? [
                <Col xs="12" md="9" lg="6" key="vid"><YoutubeEmbed videoID={props.project.youtubeVideo.videoID} title={props.project.youtubeVideo.title}/></Col>,
                <Col xs="0" md="3" lg="6" key="postspace" />
            ]: null}
            {props.project.image ? [
                <Col xs="12" md="9" lg="6" key="img"><img className="w-100" src={(process.env.PUBLIC_URL || "/") + 'media/' + props.project.image.src} alt={props.project.image.src}></img></Col>,
                <Col xs="0" md="3" lg="5" key="postspace" />
            ] : null }
        </Row>
    );
}
