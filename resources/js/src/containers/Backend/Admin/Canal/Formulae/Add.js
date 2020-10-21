import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, FormGroup } from 'reactstrap';
import { faBoxOpen, faMoneyBillWaveAlt, faTv, faDollarSign, faBroadcastTower, faEdit, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';

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
        name: '',
        channel_tv: '',
        channel_radio: '',
        price_xaf: '',
        price_limo: '',
        status: '',
        photo: null,
    }

    async componentDidMount() {
        this.props.reset();
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
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let { backend: { canal: { loading, error, message, } } } = this.props;
        let { name, price_xaf, price_limo, channel_tv, channel_radio, status, photo } = this.state;
        let content = null;
        let errors = null;

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
                        <Form onSubmit={this.submitHandler} icon={faBoxOpen} title="Ajouter une formule" link="/user/canal/formulae" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faEdit} onChange={this.inputChangeHandler} value={name} name="name" required placeholder="Nom de la formule" />
                                    <FormInput type="number" className="col-md-6" icon={faMoneyBillWaveAlt} onChange={this.inputChangeHandler} value={price_xaf} name="price_xaf" required placeholder="Prix de la formule (XAF)" />
                                    <FormInput type="number" className="col-md-6" icon={faDollarSign} onChange={this.inputChangeHandler} value={price_limo} name="price_limo" required placeholder="Prix de la formule (LIMO)" />
                                    <FormInput type="number" className="col-md-6" icon={faTv} onChange={this.inputChangeHandler} value={channel_tv} name="channel_tv" required placeholder="Chaînes TV" />
                                    <FormInput type="number" className="col-md-6" icon={faBroadcastTower} onChange={this.inputChangeHandler} value={channel_radio} name="channel_radio" required placeholder="Chaînes Radio" />
                                    <FormInput type="select" className="col-md-6" icon={faExclamationCircle} onChange={this.inputChangeHandler} value={status} name="status" required placeholder="Statut">
                                        <option>Statut</option>
                                        <option value={0}>Inactive</option>
                                        <option value={1}>Active</option>
                                    </FormInput>

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
                    <Breadcrumb main="Ajouter une formule" icon={faBoxOpen} />
                    <SpecialTitle user icon={faBoxOpen}>Services Canal+</SpecialTitle>
                    <Subtitle user>Ajouter une formule</Subtitle>
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
    post: data => dispatch(actions.postFormulae(data)),
    reset: () => dispatch(actions.resetCanal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));