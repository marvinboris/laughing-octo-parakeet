import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationItem = ({ icon, children, href, className = '', different, font, exact = true, external, toggleNavbar }) => (
    <NavItem>
        {external ? <a className={'nav-link ' + ('text-' + font) + ' ' + className} href={href} target="_blank" onClick={toggleNavbar}>
            {icon ? <FontAwesomeIcon icon={icon} className="mr-1" /> : null}{children}
        </a> : <NavLink className={'nav-link ' + ('text-' + font) + ' ' + className} to={href} onClick={toggleNavbar} exact={exact} activeClassName={!different ? "text-700 active text-blue" : ""}>
                {icon ? <FontAwesomeIcon icon={icon} className="mr-1" /> : null}{children}
            </NavLink>}
    </NavItem>
);

export default navigationItem;