import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, FormGroup } from 'reactstrap';
import { faBoxOpen, faUser, faMoneyBillWave, faPlusCircle, faUsers, faLock, faEnvelope, faUserTie, faPhone, faClock, faBox, faHashtag, faSort, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faSave, faCalendar } from '@fortawesome/free-regular-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../../components/Backend/UI/Form/Form';
import FormInput from '../../../../../components/Backend/UI/Input/Input';
import FormButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';
import Feedback from '../../../../../components/Feedback/Feedback';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        customer_id: '',
        formula_id: '',
        method_id: '',
        channel_tv: '',
        channel_radio: '',
        duration: '',
        price_xaf: '',
        nid_canal: '',
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
        const { name, value, checked, files } = e.target;
        if (name === 'customer_id' && value) {
            const customer = this.props.backend.canal.customers.find(c => c.id === +value) || { nid_canal: '' };
            this.setState({ [name]: files ? files[0] : value, nid_canal: customer.nid_canal });
        } else if (name === 'formula_id' && value) {
            const formula = this.props.backend.canal.formulae.find(f => f.id === +value) || { channel_tv: '', channel_radio: '', price_xaf: '' };
            this.setState({ [name]: files ? files[0] : value, channel_tv: formula.channel_tv, channel_radio: formula.channel_radio, price_xaf: formula.price_xaf });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let { backend: { canal: { loading, error, message, customers, formulae, methods } } } = this.props;
        let { customer_id, formula_id, channel_tv, channel_radio, nid_canal, duration, method_id, price_xaf } = this.state;
        let content = null;
        let errors = null;

        if (!customers) customers = [];
        if (!formulae) formulae = [];
        if (!methods) methods = [];

        const customersOptions = customers.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);
        const formulaeOptions = formulae.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);
        const methodsOptions = methods.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.id}>{item.name}</option>);

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
                        <Form onSubmit={this.submitHandler} icon={faBoxOpen} title="Réabonnement" link="/user/canal/subscriptions" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="select" className="col-md-6" icon={faUserTie} onChange={this.inputChangeHandler} value={customer_id} name="customer_id" required placeholder="Sélectionner le client">
                                        <option>Sélectionner le client</option>
                                        {customersOptions}
                                    </FormInput>
                                    <FormInput type="select" className="col-md-6" icon={faBox} onChange={this.inputChangeHandler} value={formula_id} name="formula_id" required placeholder="Sélectionner la formule">
                                        <option>Sélectionner la formule</option>
                                        {formulaeOptions}
                                    </FormInput>
                                    <FormInput type="number" className="col-md-6" icon={faHashtag} value={channel_tv} name="channel_tv" required placeholder="Chaînes TV" />
                                    <FormInput type="number" className="col-md-6" icon={faHashtag} value={channel_radio} name="channel_radio" required placeholder="Chaînes Radio" />
                                    <FormInput type="text" className="col-md-6" icon={faHashtag} value={nid_canal} name="nid_canal" required placeholder="Numéro d'abonné" />
                                    <FormInput type="select" className="col-md-6" icon={faClock} onChange={this.inputChangeHandler} value={duration} name="duration" required placeholder="Durée (jours)">
                                        <option>Durée (jours)</option>
                                        <option value={30}>30</option>
                                        <option value={60}>60</option>
                                    </FormInput>
                                    <FormInput type="select" className="col-md-6" icon={faSort} onChange={this.inputChangeHandler} value={method_id} name="method_id" required placeholder="Méthode de paiement">
                                        <option>Méthode de paiement</option>
                                        {methodsOptions}
                                    </FormInput>
                                    <FormInput type="number" className="col-md-6" icon={faMoneyBillWaveAlt} value={price_xaf} name="price_xaf" required placeholder="Prix de la formule (XAF)" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>Sauvegarder</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light w-60 mx-auto"></div>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Réabonnement" icon={faBoxOpen} />
                    <SpecialTitle user icon={faBoxOpen}>Services Canal+</SpecialTitle>
                    <Subtitle user>Réabonnement</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getSubscriptionsInfo()),
    post: data => dispatch(actions.postSubscriptions(data)),
    reset: () => dispatch(actions.resetCanal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));