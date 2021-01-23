import React from 'react';
import Publication from '../Models/Publication';

const OWN_NAME = 'Matthew K. Miller';

export default function PublicationSummary(props: {publication: Publication}) {
    const authorCount = props.publication.authors.length;
    const authorText = props.publication.authors.map((a, i) => 
        <span>
            {
                a === OWN_NAME ? (<b>{OWN_NAME}</b>) : a
            }
            {
                i < authorCount - 2 ? ', ' :
                i === authorCount - 1 ? '' : 
                authorCount > 2 ? ', and ' : ' and '
            }
        </span>);
    return (
        <p>
            {authorText}{`. ${props.publication.year}. ${props.publication.title}. ${props.publication.venue}.`}
            {props.publication.doi !== undefined ? (<span> DOI: <a target="_blank" rel="noreferrer" href={'https://doi.org/' + props.publication.doi}>{props.publication.doi}</a></span>) : null }
        </p>
    );
}
