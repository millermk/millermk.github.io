import React from 'react';
import './YoutubeEmbed.css';

export default function YoutubeEmbed(props: {videoID: string}) {
    return (
        <div className="video-container">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${props.videoID}?modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
