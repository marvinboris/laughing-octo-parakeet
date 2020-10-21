import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faComments } from '@fortawesome/free-regular-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, toggleNavbar, role, cartItemsNumber, notifications, light = false, font }) => {
    return (
        // <Collapse>
            <Nav className="d-flex align-items-center" navbar>
                <NavigationItem font={font} toggleNavbar={toggleNavbar} icon={faHome} href="/">Home</NavigationItem>
                <NavigationItem font={font} toggleNavbar={toggleNavbar} icon={faEnvelope} exact={false} href="/request">Request</NavigationItem>
                <NavigationItem font={font} toggleNavbar={toggleNavbar} icon={faCommentDots} external href="https://forum.liyeplimal.net">Forum</NavigationItem>
                <NavigationItem font={font} toggleNavbar={toggleNavbar} icon={faComments} external href="https://support.liyeplimal.net/livechat">LiveChat</NavigationItem>
            </Nav>
        // </Collapse>
    );
}

export default navigationItems;