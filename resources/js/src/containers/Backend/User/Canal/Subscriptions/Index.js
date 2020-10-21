import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faBoxOpen, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';
import Counter from '../../../../../components/Backend/UI/Counter/Counter';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate, convertTime } from '../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { canal: { loading, error, message, subscriptions, total } } } = this.props;

        let content;
        let errors;
        let feedback;

        feedback = <Feedback message={message} />;

        if (!subscriptions) subscriptions = [];

        errors = <>
            <Error err={error} />
        </>;

        const data = subscriptions.map(subscription => {
            return updateObject(subscription, {
                created_at: convertDate(subscription.created_at),
                expiry_date: convertDate(subscription.expiry_date),
                action: <div className="text-center">
                    <Link to={`/user/canal/subscriptions/${subscription.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/user/canal/subscriptions/${subscription.id}/edit`} className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <Delete deleteAction={() => this.props.delete(subscription.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                </div>,
            });
        });

        content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(subscriptions)} get={this.props.get} total={total} bordered add="Ajouter" link="/user/canal/subscriptions/add" icon={faBoxOpen} title="Gestion Abonnements" className="shadow-sm"
                        fields={[
                            { name: 'Client', key: 'customer' },
                            { name: 'Formule Choisie', key: 'formula' },
                            { name: 'Numéro d\'abonné', key: 'nid_canal' },
                            { name: 'Date d\'abonnement', key: 'created_at' },
                            { name: 'Date de fin d\'abonnement', key: 'expiry_date' },
                            { name: 'Méthode de paiement', key: 'method' },
                            { name: 'Montant Perçu', key: 'amount_received' },
                            { name: 'Action', key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Gestion Abonnements" icon={faBoxOpen} />
                    <SpecialTitle user icon={faBoxOpen}>Services Canal+</SpecialTitle>
                    <Subtitle user>Gestion Abonnements</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getSubscriptions()),
    delete: id => dispatch(actions.deleteSubscriptions(id)),
    patch: (id, data) => dispatch(actions.patchSubscriptions(id, data)),
    reset: () => dispatch(actions.resetCanal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));