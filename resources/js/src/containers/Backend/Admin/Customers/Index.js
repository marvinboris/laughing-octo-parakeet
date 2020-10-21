import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../components/Backend/UI/View/View';


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
                    pages: { components: { list: { action, see } }, backend: { pages: { customers: { title, add, index, form: { full_name, phone, photo, customer_photo, country, city, quarter, nid_canal, nid_eneo, nid_camwater } } } } }
                }
            },
            backend: { customers: { loading, error, message, customers, total } }
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        if (!customers) customers = [];
        const data = customers.map(customer => {
            return updateObject(customer, {
                created_at: convertDate(customer.created_at),
                photo: customer.photo && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <View title={`${customer_photo}: ${customer.name}`} content={<img src={customer.photo} className="w-100" />}>
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                        </View>
                    </span>
                </div>,
                action: <div className="text-center">
                    <Link to={`/admin/customers/${customer.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/admin/customers/${customer.id}/edit`} className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <Delete deleteAction={() => this.props.delete(customer.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(customers)} get={this.props.get} total={total} bordered add={add} link="/admin/customers/add" icon={faUserTie} title={index} className="shadow-sm"
                        fields={[
                            { name: full_name, key: 'name' },
                            { name: phone, key: 'phone' },
                            { name: photo, key: 'photo' },
                            { name: country, key: 'country' },
                            { name: city, key: 'town' },
                            { name: quarter, key: 'quarter' },
                            { name: nid_canal, key: 'nid_canal' },
                            { name: nid_eneo, key: 'nid_eneo' },
                            { name: nid_camwater, key: 'nid_camwater' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={index} icon={faUserTie} />
                    <SpecialTitle user icon={faUserTie}>{title}</SpecialTitle>
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
    get: (page, show, search) => dispatch(actions.getCustomers(page, show, search)),
    delete: id => dispatch(actions.deleteCustomers(id)),
    reset: () => dispatch(actions.resetCustomers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));