import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Row, Alert } from 'reactstrap';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import TextareaAutoResize from 'react-autosize-textarea';
import moment from 'moment';

import Error from '../../Error/Error';
import Message from '../Message/Message';

import * as actions from '../../../store/actions';
import { updateObject } from '../../../shared/utility';

class Room extends Component {
    state = {
        body: '',
        files: [],

        messages: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.messages) !== JSON.stringify(prevState.messages)) return updateObject(prevState, { messages: nextProps.messages });
        return prevState;
    }

    componentDidUpdate(prevProps) {
        if (this.props.messages.length !== prevProps.messages.length) this.scrollToEnd();
        if (this.props.active && !prevProps.active) this.scrollToEnd();
    }

    inputChangedHandler = e => {
        const { name, value, files, type } = e.target;
        if (type === 'file') this.setState({ files })
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmitMessage(e.target, this.scrollToEnd);
    }

    scrollToEnd = () => {
        const scrollingZone = document.getElementById('scrolling-' + this.props.request.reqid);
        scrollingZone.scrollTop = scrollingZone.scrollHeight;
    }

    onKeyDown = e => {
        if (+e.which === 13) {
            e.preventDefault();
            this.props.onSubmitMessage(document.getElementById('form-' + this.props.request.reqid), this.scrollToEnd);
            this.setState({ body: '' }, () => {
                document.getElementById('files').value = "";
            });
        }
    }

    render() {
        const { body, messages } = this.state;
        const { auth: { token }, backend: { chat: { error } }, request: { reqid, status, updated_at, edited_by } } = this.props;

        let content;
        let errors = <Error err={error} />;

        const messagesContent = messages.map((message, index) => {
            const right = (token && message.from !== 'client') || (!token && message.from === 'client');

            return <Message key={JSON.stringify(message)} right={right} content={message.content} created_at={message.created_at} next_created_at={(messages.length - 1 > index) && messages[index + 1].created_at} files={message.files} from={message.from} />;
        });

        content = <div className="h-100 d-flex flex-column bg-white-50 overflow-hidden">
            <div id={"scrolling-" + reqid} className="flex-fill p-3" style={{ overflowY: 'auto' }}>
                {messagesContent}
                {status > 1 && <>
                    <hr />
                    <Alert color={[null, null, 'danger', 'success'][status]} className="text-center">{[null, null, 'Cancelled', 'Solved'][status]} on <span className="text-700">{moment(updated_at).format('LLL')}</span> by <span className="text-700">{edited_by}</span></Alert>
                </>}
            </div>

            <Row className="border-top bg-white mx-0">
                <Form id={"form-" + reqid} onSubmit={this.submitHandler} className="col-12 py-3 d-flex align-items-end">
                    <TextareaAutoResize disabled={status > 1} id={"textarea-" + reqid} onKeyDown={this.onKeyDown} name="body" className="form-control" value={body} placeholder="Type a message" onChange={this.inputChangedHandler} rows={1} />
                    <input type="file" disabled={status > 1} className="d-none" id="files" onChange={this.inputChangedHandler} multiple name="files[]" accept=".pdf,.jpg,.jpeg,.png" />
                    <input type="hidden" disabled={status > 1} name="reqid" value={reqid} readOnly />
                    <div className="pl-3">
                        <Button type="button" color="soft" className="rounded-pill" disabled={status > 1} onClick={status > 1 ? undefined : (() => document.getElementById("files").click())}>
                            <FontAwesomeIcon icon={faPaperclip} />
                        </Button>
                    </div>
                </Form>
            </Row>
        </div>;

        return <>
            {errors}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmitMessage: (data, cb) => dispatch(actions.postChatSubmitMessage(data, cb)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));