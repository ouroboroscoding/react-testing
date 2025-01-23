/**
 * Testing
 *
 * Shows a testing component with site info
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2024-09-19
 */
import PropTypes from 'prop-types';
import React from 'react';
export type TestingProps = {
    additional?: [
        {
            label: string;
            value: string;
        }
    ];
    locale?: string;
    location?: string;
    version?: string;
};
/**
 * Testing
 *
 * @name Testing
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
declare function Testing({ additional, locale, location, version }: TestingProps): React.JSX.Element;
declare namespace Testing {
    var propTypes: {
        locale: PropTypes.Requireable<string>;
        location: PropTypes.Requireable<string>;
        version: PropTypes.Requireable<string>;
    };
}
export default Testing;
