/* temporary override of ReactStrap's version for early access to https://github.com/reactstrap/reactstrap/pull/2461 */

import React from 'react';

/**
 * CarouselContext
 * {
 *  direction: PropTypes.oneOf(['start', 'end']).isRequired,
 * }
 */
export const CarouselContext = React.createContext({});
