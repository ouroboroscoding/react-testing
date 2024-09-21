/**
 * Testing
 *
 * Shows a testing component with site info
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2024-09-19
 */
// Ouroboros modules
import { useSize, useWidth } from '@ouroboros/react-hooks';
// NPM modules
import PropTypes from 'prop-types';
import React, { useState } from 'react';
/**
 * Testing
 *
 * @name Testing
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
export default function Testing({ locale, location, version }) {
    // State
    const [open, openSet] = useState(false);
    // Hooks
    const size = useSize();
    const width = useWidth();
    // If it's not open
    if (open === false) {
        // Return just the icon
        return (React.createElement("div", { id: "oc_testing", className: "closed" },
            React.createElement("button", { onClick: () => openSet(true) }, "T")));
    }
    // Render
    return (React.createElement("div", { id: "oc_testing", className: "open" },
        React.createElement("button", { onClick: () => openSet(false) }, "X"),
        version && React.createElement("p", null,
            "Version: ",
            version),
        location && React.createElement("p", null,
            "Location: ",
            location),
        locale && React.createElement("p", null,
            "Locale: ",
            locale),
        React.createElement("p", null,
            "Size: ",
            size),
        React.createElement("p", null,
            "Width: ",
            width)));
}
// Valid props
Testing.propTypes = {
    locale: PropTypes.string,
    location: PropTypes.string,
    version: PropTypes.string
};
