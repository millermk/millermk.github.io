import React from 'react';
import { Row } from 'reactstrap';
import './ProjectSummary.css';
import Project from '../Models/Project';
import YoutubeEmbed from './YoutubeEmbed';

export default function ProjectSummary(props: {project: Project}) {
    return (
        <Row className="bg-light mb-2 py-2 px-4">
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
            <div className="video-container-limited-width">
                {props.project.youtubeVideoID ? <YoutubeEmbed videoID={props.project.youtubeVideoID}/> : null}
            </div>
        </Row>
    );
}
