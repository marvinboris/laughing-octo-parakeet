import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        title: '',
        start_time: new Date(),
        finish_time: new Date(),
        event_type_id: 0,
        description: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
    }

    render() {
        const { title, start_time, finish_time, event_type_id, description } = this.state;
        let { backend: { calendar: { types } } } = this.props;

        if (!types) types = [];

        const options = types.map(type => <option value={type.id} key={JSON.stringify(type)}>{type.name}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
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
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postCalendar(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));