import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerBlock = ({ children, title, className }) => (
    <div className={className}>
        <h4 className="text-700 position-relative pb-2 mb-3">
            {title}
        </h4>
        <div className="d-flex flex-column">
            {children}
        </div>
    </div>
);

export default footerBlock;
