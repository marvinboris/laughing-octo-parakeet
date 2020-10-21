import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes, faPaperPlane, faClock, faCode, faSignature, faList, faBuilding, faUserTie, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';
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
        agency_id: '',
        user_id: '',
        date_due: new Date(),
        comment: '',
        priority_id: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.task && prevState.agency_id === '') return updateObject(prevState, { ...nextProps.task });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, updateObject(this.state, { date_due: parseMoment(moment(this.state.date_due)) }));
    }

    render() {
        const { agency_id, user_id, date_due, comment, priority_id, id } = this.state;
        const { backend: { tasks: { agencies, priorities } } } = this.props;

        const agenciesOptions = agencies.sort((a, b) => a.name > b.name).map(agency => <option key={JSON.stringify(agency)} value={agency.id}>{agency.name}</option>);
        const prioritiesOptions = priorities.sort((a, b) => a.name > b.name).map(priority => <option key={JSON.stringify(priority)} value={priority.id}>{priority.name}</option>);

        const agency = agencies.find(agency => +agency.id === +agency_id);
        let employeesOptions = [];

        if (agency) employeesOptions = agency.employees.sort((a, b) => a.first_name > b.first_name).map(employee => <option key={JSON.stringify(employee)} value={employee.id}>{employee.first_name + ' ' + employee.last_name}</option>);

        return <Form id={id} onSubmit={this.submitHandler} className="row">
            <Input className="col-lg-6" type="select" name="agency_id" placeholder="Agency" onChange={this.inputChangedHandler} icon={faBuilding} validation={{ required: true }} required value={agency_id}>
                <option>Select an agency</option>
                {agenciesOptions}
            </Input>
            <Input className="col-lg-6" type="select" name="user_id" onChange={this.inputChangedHandler} placeholder="Employee" icon={faUserTie} validation={{ required: true }} required value={user_id}>
                <option>Select an employee</option>
                {employeesOptions}
            </Input>
            <Input className="col-lg-6" type="datetime-local" name="date_due" placeholder="Date Due" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={date_due} />
            <Input className="col-lg-6" type="select" name="priority_id" placeholder="Priority" onChange={this.inputChangedHandler} icon={faBatteryHalf} validation={{ required: true }} required value={priority_id}>
                <option>Select a priority</option>
                {prioritiesOptions}
            </Input>
            <Input className="col" type="textarea" name="comment" placeholder="Comment" onChange={this.inputChangedHandler} icon={faCode} validation={{ required: true }} required value={comment} />

            <FormGroup className="col-12">
                <BetweenButton color="brokenblue" icon={faPaperPlane}>Submit</BetweenButton>
            </FormGroup>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchCustomers(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));