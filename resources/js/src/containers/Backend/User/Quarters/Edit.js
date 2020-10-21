import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faBuilding, faCity } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import FormButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

class Edit extends Component {
    state = {
        name: '',
        city_id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.quarters.quarter && prevState.name === '') {
            const { backend: { quarters: { quarter } } } = nextProps;
            return updateObject(prevState, { ...quarter });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.quarterId);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.quarterId, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { quarters: { title, edit, index, form } } } }
                }
            },
            backend: { quarters: { loading, error, message, cities } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name, city_id } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'quarters');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('u')) && <Redirect to="/user/dashboard" />;

        if (!cities) cities = [];
        const citiesOptions = cities.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faBuilding} title={edit} list={index} link="/user/quarters" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput type="text" className="col-md-6" icon={faBuilding} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="select" className="col-md-6" icon={faCity} onChange={this.inputChangeHandler} value={city_id} name="city_id" required placeholder={form.select_city}>
                                        <option>{form.select_city}</option>
                                        {citiesOptions}
                                    </FormInput>

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb items={[{ to: '/user/quarters', content: index }]} main={edit} icon={faBuilding} />
                    <SpecialTitle user icon={faCity}>{title}</SpecialTitle>
                    <Subtitle user>{edit}</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {redirect}
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.getQuarter(id)),
    patch: (id, data) => dispatch(actions.patchQuarters(id, data)),
    reset: () => dispatch(actions.resetQuarters()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));