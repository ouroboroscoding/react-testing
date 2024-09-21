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

// Types
export type TestingProps = {
	locale: string,
	location: string,
	version: string
}

/**
 * Testing
 *
 * @name Testing
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
export default function Testing({
	locale, location, version
}: TestingProps) {

	// State
	const [ open, openSet ] = useState<boolean>(false);

	// Hooks
	const size = useSize();
	const width = useWidth();

	// If it's not open
	if(open === false) {

		// Return just the icon
		return (
			<div id="oc_testing" className="closed">
				<button onClick={() => openSet(true)}>T</button>
			</div>
		);
	}

	// Render
	return (
		<div id="oc_testing" className="open">
			<button onClick={() => openSet(false)}>X</button>
			{version && <p>Version: {version}</p>}
			{location && <p>Location: {location}</p>}
			{locale && <p>Locale: {locale}</p>}
			<p>Size: {size}</p>
			<p>Width: {width}</p>
		</div>
	)
}

// Valid props
Testing.propTypes = {
	locale: PropTypes.string,
	location: PropTypes.string,
	version: PropTypes.string
}