import React from 'react';
import Publication, { PublicationType } from '../Models/Publication';

const OWN_NAME = 'Matthew K. Miller';
const publicationTypeToDisplay = (t: PublicationType) => {
    switch (t) {
        case 'conf-full':
            return 'Conference Paper';
        case 'conf-short':
            return 'Conference Paper (short)';
        case 'journal':
            return 'Journal Article';
        case 'patent':
            return 'Patent';
        case 'thesis':
            return 'Thesis';
    }
}

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
        <div>
            <code>{publicationTypeToDisplay(props.publication.type)}</code>
            <p>
                {authorText}{`. ${props.publication.year}. `}<i>{props.publication.title}.</i> {props.publication.venue}.
                {props.publication.doi !== undefined ? (<span> DOI: <a target="_blank" rel="noreferrer" href={'https://doi.org/' + props.publication.doi}>{props.publication.doi}</a></span>) : null }
                {props.publication.link !== undefined ? (<span> Link: <a target="_blank" rel="noreferrer" href={props.publication.link.href}>{props.publication.link.text}</a></span>) : null }
            </p>
        </div>
    );
}
