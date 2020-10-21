import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes, faPaperPlane, faClock, faCode, faSignature, faList } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, CustomInput, Form, Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parser } from 'html-to-react';
import moment from 'moment';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';
import { updateObject, parseMoment } from '../../../../../shared/utility';

const parser = new Parser();

class Edit extends Component {
    state = {
        title: '',
        start_time: new Date(),
        finish_time: new Date(),
        event_type_id: 0,
        description: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.event && prevState.title === '') return updateObject(prevState, { ...nextProps.event });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, updateObject(this.state, { start_time: parseMoment(moment(this.state.start_time)), finish_time: parseMoment(moment(this.state.finish_time)) }));
    }

    render() {
        const { title, description, event_type_id, start_time, finish_time, id } = this.state;
        let { backend: { calendar: { types } } } = this.props;

        if (!types) types = [];

        const options = types.map(type => <option value={type.id} key={JSON.stringify(type)}>{type.name}</option>);

        return <Form id={id} onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="text" name="title" placeholder="Title" onChange={this.inputChangedHandler} icon={faSignature} validation={{ required: true }} required value={title} />
            <Input className="col-lg-6" type="select" name="event_type_id" onChange={this.inputChangedHandler} icon={faList} validation={{ required: true }} required value={event_type_id}>
                <option>Select an event type</option>
                {options}
            </Input>
            <Input className="col-lg-6" type="datetime-local" name="start_time" placeholder="Start Time" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={start_time} />
            <Input className="col-lg-6" type="datetime-local" name="finish_time" placeholder="Finish Time" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={finish_time} />
            <Input className="col" type="textarea" name="description" placeholder="Description" onChange={this.inputChangedHandler} icon={faCode} validation={{ required: true }} required value={description} />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchCalendar(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));