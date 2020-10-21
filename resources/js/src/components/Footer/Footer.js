import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faHeart } from '@fortawesome/free-solid-svg-icons';

import FooterBlock from './FooterBlock/FooterBlock';

import './Footer.css';

const footer = () => (
    <div className="Footer bg-white text-secondary">
        <footer className="container d-none d-md-block py-5">
            <Row>
                <Col>
                    <FooterBlock title="FOLLOW US">
                        <div>Facebook</div>
                        <div>Twitter</div>
                        <div>Instagram</div>
                        <div>LinkedIn</div>
                        <div>YouTube</div>
                    </FooterBlock>
                </Col>
                <Col>
                    <FooterBlock title="OUR PRODUCTS">
                        <div>Liyeplimal</div>
                        <div>Limarket</div>
                        <div>Simtrex</div>
                        <div>Simbcoin</div>
                        <div>Auto-Ecole Université</div>
                        <div>Workoo</div>
                        <div>Liportal</div>
                    </FooterBlock>
                </Col>
                <Col lg={2}>
                    <div className="text-center text-darkblue">
                        <FontAwesomeIcon icon={faHeadset} size="10x" />
                    </div>
                </Col>
                <Col lg={5}>
                    <h5 className="text-darkblue text-700 mb-3">
                        Made with <FontAwesomeIcon icon={faHeart} /> by Global Investment Trading Team
                    </h5>

                    <div className="text-small">
                        As it has always been one of our duties, we always make
                        sure we are available when you need us. Global Investment
                        Trading is a welcoming company and gives you the
                        opportunity to get started from zero to hero. As a support team
                        we will always make sure you the best user experience ever.<br />
                        Thanks for trusting in us.
                    </div>
                </Col>
            </Row>
        </footer>
        <footer className="container-fluid border-top border-border-50 pb-4">
            <div className="container text-center pt-4">
                © Copyrights 2020 <span className="text-yellow text-700">GIT Developers</span>. All rights reserved.
            </div>
        </footer>
    </div>
);

export default footer;
