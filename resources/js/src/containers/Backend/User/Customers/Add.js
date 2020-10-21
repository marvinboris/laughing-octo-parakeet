import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faUserTie, faUser, faCity, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faSave, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

class Add extends Component {
    state = {
        name: '',
        phone: '',
        photo: null,
        city: '',
        quarter: '',
        nid_canal: '',
        nid_eneo: '',
        nid_camwater: '',
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = () => document.getElementById('photo').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file } }, backend: { pages: { customers: { title, add, index, form } } } }
                }
            },
            backend: { customers: { loading, error, message, cities } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name, phone, photo, city, quarter, nid_canal, nid_eneo, nid_camwater } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'customers');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('c')) && <Redirect to="/user/dashboard" />;

        if (!cities) cities = [];
        let quarters = [];

        if (city !== '') quarters = cities.find(c => c.id === +city).quarters;

        const citiesOptions = cities.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);
        const quartersOptions = quarters.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);

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
                        <Form onSubmit={this.submitHandler} icon={faUserTie} title={add} list={index} link="/user/customers" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="tel" className="col-md-6" addon={<span className="text-secondary text-small">+237</span>} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder={form.phone} />
                                    <FormInput type="select" className="col-md-6" icon={faCity} onChange={this.inputChangeHandler} value={city} name="city" required placeholder={form.select_city}>
                                        <option>{form.select_city}</option>
                                        {citiesOptions}
                                    </FormInput>
                                    <FormInput type="select" className="col-md-6" icon={faBuilding} onChange={this.inputChangeHandler} value={quarter} name="quarter" required placeholder={form.select_quarter}>
                                        <option>{form.select_quarter}</option>
                                        {quartersOptions}
                                    </FormInput>
                                    <FormInput type="text" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={nid_canal} name="nid_canal" placeholder={form.nid_canal} />
                                    <FormInput type="text" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={nid_eneo} name="nid_eneo" placeholder={form.nid_eneo} />
                                    <FormInput type="text" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={nid_camwater} name="nid_camwater" placeholder={form.nid_camwater} />

                                    <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light d-flex justify-content-center align-items-center w-60 mx-auto" style={{ cursor: 'pointer' }} onClick={this.fileUpload}>
                                    {photo && <div className="text-center text-green">
                                        <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>
                                        <div className="mt-3">{selected_file}</div>
                                    </div>}
                                </div>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={add} icon={faUserTie} />
                    <SpecialTitle user icon={faUserTie}>{title}</SpecialTitle>
                    <Subtitle user>{add}</Subtitle>
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
    get: () => dispatch(actions.getCustomersInfo()),
    post: data => dispatch(actions.postCustomers(data)),
    reset: () => dispatch(actions.resetCustomers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));