import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faBuilding } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action } }, backend: { pages: { quarters: { title, add, index, form: { name, city, created_at } } } } }
                }
            },
            backend: { quarters: { loading, error, message, quarters, total } }
        } = this.props;

        let content;
        let errors;
        let feedback;

        feedback = <Feedback message={message} />;

        if (!quarters) quarters = [];

        errors = <>
            <Error err={error} />
        </>;

        const data = quarters.map(quarter => {
            return updateObject(quarter, {
                created_at: convertDate(quarter.created_at),
                action: <div className="text-center">
                    <Link to={`/admin/quarters/${quarter.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/admin/quarters/${quarter.id}/edit`} className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <Delete deleteAction={() => this.props.delete(quarter.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                </div>,
            });
        });

        content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(quarters)} get={this.props.get} total={total} bordered add={add} link="/admin/quarters/add" icon={faBuilding} title={index} className="shadow-sm"
                        fields={[
                            { name, key: 'name' },
                            { name: city, key: 'city' },
                            { name: created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={index} icon={faBuilding} />
                    <SpecialTitle user icon={faBuilding}>{title}</SpecialTitle>
                    <Subtitle user>{index}</Subtitle>
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
    get: (page, show, search) => dispatch(actions.getQuarters(page, show, search)),
    delete: id => dispatch(actions.deleteQuarters(id)),
    reset: () => dispatch(actions.resetQuarters()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));