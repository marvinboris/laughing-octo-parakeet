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

class Formulae extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { canal: { loading, error, message, formulae, total } } } = this.props;

        let content;
        let errors;
        let feedback;

        feedback = <Feedback message={message} />;

        if (!formulae) formulae = [];

        errors = <>
            <Error err={error} />
        </>;

        const data = formulae.map(formula => {
            const colors = ['pink', 'green'];
            const texts = ['Inactive', 'Active'];
            const icons = [faTimesCircle, faCheckCircle];

            return updateObject(formula, {
                created_at: convertDate(formula.created_at),
                channel: <div className="text-700">
                    {formula.channel_tv} chaînes TV + {formula.channel_radio} chaînes Radio
                </div>,
                status: <Badge color={colors[formula.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[formula.status]} fixedWidth /> {texts[formula.status]}</Badge>,
                action: <div className="text-center">
                    <Link to={`/user/canal/formulae/${formula.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/user/canal/formulae/${formula.id}/edit`} className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <Delete deleteAction={() => this.props.delete(formula.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                </div>,
            });
        });

        content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(formulae)} get={this.props.get} total={total} bordered add="Ajouter" link="/user/canal/formulae/add" icon={faBoxOpen} title="Liste des formules" className="shadow-sm"
                        fields={[
                            { name: 'Date', key: 'created_at' },
                            { name: 'Nom de la formule', key: 'name' },
                            { name: 'Prix de la formule (XAF)', key: 'price_xaf' },
                            { name: 'Prix de la formule (LIMO)', key: 'price_limo' },
                            { name: 'Créée par', key: 'created_by' },
                            { name: 'Nombre de chaînes', key: 'channel' },
                            { name: 'Statut', key: 'status', minWidth: 140 },
                            { name: 'Action', key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Liste des formules" icon={faBoxOpen} />
                    <SpecialTitle user icon={faBoxOpen}>Services Canal+</SpecialTitle>
                    <Subtitle user>Liste des formules</Subtitle>
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
    get: () => dispatch(actions.getFormulae()),
    delete: id => dispatch(actions.deleteFormulae(id)),
    patch: (id, data) => dispatch(actions.patchFormulae(id, data)),
    reset: () => dispatch(actions.resetCanal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Formulae));