import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit, faBook, faFileImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import { convertDate, convertTime } from '../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ event }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Event details
                    </div>
                <hr />
            </Col>
            <I label="Title">{event.title}</I>
            <I label="Type">{event.event_type}</I>
            <I label="Start Date">{convertDate(event.start_time)}</I>
            <I label="Start Time">{convertTime(event.start_time)}</I>
            <I label="Finish Date">{convertDate(event.finish_time)}</I>
            <I label="Finish Time">{convertTime(event.finish_time)}</I>
            <I label="Description" size={12}>{event.description}</I>
        </Row>
    </>;
}