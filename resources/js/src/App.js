import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// User routes
const asyncUserCanalFormulae = asyncComponent(() => import('./containers/Backend/User/Canal/Formulae'));
const asyncUserCanalFormulaeAdd = asyncComponent(() => import('./containers/Backend/User/Canal/Formulae/Add'));
const asyncUserCanalSubscriptions = asyncComponent(() => import('./containers/Backend/User/Canal/Subscriptions'));
const asyncUserCanalSubscriptionsAdd = asyncComponent(() => import('./containers/Backend/User/Canal/Subscriptions/Add'));

const asyncUserCmsGlobal = asyncComponent(() => import('./containers/Backend/User/Cms/Global'));
const asyncUserCmsGeneral = asyncComponent(() => import('./containers/Backend/User/Cms/General'));
const asyncUserCmsComponents = asyncComponent(() => import('./containers/Backend/User/Cms/Components'));
const asyncUserCmsAuth = asyncComponent(() => import('./containers/Backend/User/Cms/Auth'));
const asyncUserCmsBackend = asyncComponent(() => import('./containers/Backend/User/Cms/Backend'));

const asyncUserCities = asyncComponent(() => import('./containers/Backend/User/Cities'));
const asyncUserCitiesAdd = asyncComponent(() => import('./containers/Backend/User/Cities/Add'));
const asyncUserCitiesEdit = asyncComponent(() => import('./containers/Backend/User/Cities/Edit'));

const asyncUserCustomers = asyncComponent(() => import('./containers/Backend/User/Customers'));
const asyncUserCustomersAdd = asyncComponent(() => import('./containers/Backend/User/Customers/Add'));
const asyncUserCustomersEdit = asyncComponent(() => import('./containers/Backend/User/Customers/Edit'));

const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));

const asyncUserExpenses = asyncComponent(() => import('./containers/Backend/User/Expenses'));
const asyncUserExpensesAdd = asyncComponent(() => import('./containers/Backend/User/Expenses/Add'));
const asyncUserExpensesEdit = asyncComponent(() => import('./containers/Backend/User/Expenses/Edit'));

const asyncUserFeatures = asyncComponent(() => import('./containers/Backend/User/Features'));
const asyncUserFeaturesAdd = asyncComponent(() => import('./containers/Backend/User/Features/Add'));
const asyncUserFeaturesEdit = asyncComponent(() => import('./containers/Backend/User/Features/Edit'));

const asyncUserLanguages = asyncComponent(() => import('./containers/Backend/User/Languages'));
const asyncUserLanguagesAdd = asyncComponent(() => import('./containers/Backend/User/Languages/Add'));
const asyncUserLanguagesEdit = asyncComponent(() => import('./containers/Backend/User/Languages/Edit'));

const asyncUserMethods = asyncComponent(() => import('./containers/Backend/User/Methods'));
const asyncUserMethodsAdd = asyncComponent(() => import('./containers/Backend/User/Methods/Add'));
const asyncUserMethodsEdit = asyncComponent(() => import('./containers/Backend/User/Methods/Edit'));

const asyncUserQuarters = asyncComponent(() => import('./containers/Backend/User/Quarters'));
const asyncUserQuartersAdd = asyncComponent(() => import('./containers/Backend/User/Quarters/Add'));
const asyncUserQuartersEdit = asyncComponent(() => import('./containers/Backend/User/Quarters/Edit'));

const asyncUserRoles = asyncComponent(() => import('./containers/Backend/User/Roles'));
const asyncUserRolesAdd = asyncComponent(() => import('./containers/Backend/User/Roles/Add'));
const asyncUserRolesEdit = asyncComponent(() => import('./containers/Backend/User/Roles/Edit'));

const asyncUserSettingsLanguage = asyncComponent(() => import('./containers/Backend/User/Settings/Language'));

const asyncUserUsers = asyncComponent(() => import('./containers/Backend/User/Users'));
const asyncUserUsersAdd = asyncComponent(() => import('./containers/Backend/User/Users/Add'));
const asyncUserUsersEdit = asyncComponent(() => import('./containers/Backend/User/Users/Edit'));



// Admin routes
const asyncAdminAdmins = asyncComponent(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = asyncComponent(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = asyncComponent(() => import('./containers/Backend/Admin/Admins/Edit'));

const asyncAdminCmsGlobal = asyncComponent(() => import('./containers/Backend/Admin/Cms/Global'));
const asyncAdminCmsGeneral = asyncComponent(() => import('./containers/Backend/Admin/Cms/General'));
const asyncAdminCmsComponents = asyncComponent(() => import('./containers/Backend/Admin/Cms/Components'));
const asyncAdminCmsAuth = asyncComponent(() => import('./containers/Backend/Admin/Cms/Auth'));
const asyncAdminCmsBackend = asyncComponent(() => import('./containers/Backend/Admin/Cms/Backend'));

const asyncAdminCities = asyncComponent(() => import('./containers/Backend/Admin/Cities'));
const asyncAdminCitiesAdd = asyncComponent(() => import('./containers/Backend/Admin/Cities/Add'));
const asyncAdminCitiesEdit = asyncComponent(() => import('./containers/Backend/Admin/Cities/Edit'));

const asyncAdminCustomers = asyncComponent(() => import('./containers/Backend/Admin/Customers'));
const asyncAdminCustomersAdd = asyncComponent(() => import('./containers/Backend/Admin/Customers/Add'));
const asyncAdminCustomersEdit = asyncComponent(() => import('./containers/Backend/Admin/Customers/Edit'));

const asyncAdminDashboard = asyncComponent(() => import('./containers/Backend/Admin/Dashboard/Dashboard'));

const asyncAdminExpenses = asyncComponent(() => import('./containers/Backend/Admin/Expenses'));
const asyncAdminExpensesAdd = asyncComponent(() => import('./containers/Backend/Admin/Expenses/Add'));
const asyncAdminExpensesEdit = asyncComponent(() => import('./containers/Backend/Admin/Expenses/Edit'));

const asyncAdminFeatures = asyncComponent(() => import('./containers/Backend/Admin/Features'));
const asyncAdminFeaturesAdd = asyncComponent(() => import('./containers/Backend/Admin/Features/Add'));
const asyncAdminFeaturesEdit = asyncComponent(() => import('./containers/Backend/Admin/Features/Edit'));

const asyncAdminLanguages = asyncComponent(() => import('./containers/Backend/Admin/Languages'));
const asyncAdminLanguagesAdd = asyncComponent(() => import('./containers/Backend/Admin/Languages/Add'));
const asyncAdminLanguagesEdit = asyncComponent(() => import('./containers/Backend/Admin/Languages/Edit'));

const asyncAdminMethods = asyncComponent(() => import('./containers/Backend/Admin/Methods'));
const asyncAdminMethodsAdd = asyncComponent(() => import('./containers/Backend/Admin/Methods/Add'));
const asyncAdminMethodsEdit = asyncComponent(() => import('./containers/Backend/Admin/Methods/Edit'));

const asyncAdminQuarters = asyncComponent(() => import('./containers/Backend/Admin/Quarters'));
const asyncAdminQuartersAdd = asyncComponent(() => import('./containers/Backend/Admin/Quarters/Add'));
const asyncAdminQuartersEdit = asyncComponent(() => import('./containers/Backend/Admin/Quarters/Edit'));

const asyncAdminRoles = asyncComponent(() => import('./containers/Backend/Admin/Roles'));
const asyncAdminRolesAdd = asyncComponent(() => import('./containers/Backend/Admin/Roles/Add'));
const asyncAdminRolesEdit = asyncComponent(() => import('./containers/Backend/Admin/Roles/Edit'));

const asyncAdminSettingsLanguage = asyncComponent(() => import('./containers/Backend/Admin/Settings/Language'));

const asyncAdminUsers = asyncComponent(() => import('./containers/Backend/Admin/Users'));
const asyncAdminUsersAdd = asyncComponent(() => import('./containers/Backend/Admin/Users/Add'));
const asyncAdminUsersEdit = asyncComponent(() => import('./containers/Backend/Admin/Users/Edit'));


// Common routes
const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));
const asyncAdminLogin = asyncComponent(() => import('./containers/Auth/Admin/Login/Login'));
const asyncAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify/Verify'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onGetContent } = this.props;
        onTryAuthSignup();
        onGetContent();
        init();
    }

    render() {
        const { content: { cms }, auth: { role } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        let routes = (
            <Switch>
                <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                <Route path="/auth/admin/login" component={asyncAdminLogin} />
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user/login" component={asyncUserLogin} />

                <Redirect to="/auth/user/login" />
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/user/canal/formulae/add" component={asyncUserCanalFormulaeAdd} />
                    <Route path="/user/canal/formulae" component={asyncUserCanalFormulae} />
                    <Route path="/user/canal/subscriptions/add" component={asyncUserCanalSubscriptionsAdd} />
                    <Route path="/user/canal/subscriptions" component={asyncUserCanalSubscriptions} />

                    <Route path="/user/cms/global" component={asyncUserCmsGlobal} />
                    <Route path="/user/cms/general" component={asyncUserCmsGeneral} />
                    <Route path="/user/cms/components" component={asyncUserCmsComponents} />
                    <Route path="/user/cms/auth" component={asyncUserCmsAuth} />
                    <Route path="/user/cms/backend" component={asyncUserCmsBackend} />

                    <Route path="/user/cities/:cityId/edit" component={asyncUserCitiesEdit} />
                    <Route path="/user/cities/add" component={asyncUserCitiesAdd} />
                    <Route path="/user/cities" component={asyncUserCities} />

                    <Route path="/user/customers/:customerId/edit" component={asyncUserCustomersEdit} />
                    <Route path="/user/customers/add" component={asyncUserCustomersAdd} />
                    <Route path="/user/customers" component={asyncUserCustomers} />

                    <Route path="/user/dashboard" component={asyncUserDashboard} />

                    <Route path="/user/expenses/:expenseId/edit" component={asyncUserExpensesEdit} />
                    <Route path="/user/expenses/add" component={asyncUserExpensesAdd} />
                    <Route path="/user/expenses" component={asyncUserExpenses} />

                    <Route path="/user/features/:featureId/edit" component={asyncUserFeaturesEdit} />
                    <Route path="/user/features/add" component={asyncUserFeaturesAdd} />
                    <Route path="/user/features" component={asyncUserFeatures} />

                    <Route path="/user/languages/:languageId/edit" component={asyncUserLanguagesEdit} />
                    <Route path="/user/languages/add" component={asyncUserLanguagesAdd} />
                    <Route path="/user/languages" component={asyncUserLanguages} />

                    <Route path="/user/methods/:methodId/edit" component={asyncUserMethodsEdit} />
                    <Route path="/user/methods/add" component={asyncUserMethodsAdd} />
                    <Route path="/user/methods" component={asyncUserMethods} />

                    <Route path="/user/quarters/:quarterId/edit" component={asyncUserQuartersEdit} />
                    <Route path="/user/quarters/add" component={asyncUserQuartersAdd} />
                    <Route path="/user/quarters" component={asyncUserQuarters} />

                    <Route path="/user/roles/:roleId/edit" component={asyncUserRolesEdit} />
                    <Route path="/user/roles/add" component={asyncUserRolesAdd} />
                    <Route path="/user/roles" component={asyncUserRoles} />

                    <Route path="/user/settings/language" component={asyncUserSettingsLanguage} />

                    <Route path="/user/users/:userId/edit" component={asyncUserUsersEdit} />
                    <Route path="/user/users/add" component={asyncUserUsersAdd} />
                    <Route path="/user/users" component={asyncUserUsers} />



                    <Route path="/admin/admins/:adminId/edit" component={asyncAdminAdminsEdit} />
                    <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                    <Route path="/admin/admins" component={asyncAdminAdmins} />

                    <Route path="/admin/cms/global" component={asyncAdminCmsGlobal} />
                    <Route path="/admin/cms/general" component={asyncAdminCmsGeneral} />
                    <Route path="/admin/cms/components" component={asyncAdminCmsComponents} />
                    <Route path="/admin/cms/auth" component={asyncAdminCmsAuth} />
                    <Route path="/admin/cms/backend" component={asyncAdminCmsBackend} />

                    <Route path="/admin/cities/:cityId/edit" component={asyncAdminCitiesEdit} />
                    <Route path="/admin/cities/add" component={asyncAdminCitiesAdd} />
                    <Route path="/admin/cities" component={asyncAdminCities} />

                    <Route path="/admin/customers/:customerId/edit" component={asyncAdminCustomersEdit} />
                    <Route path="/admin/customers/add" component={asyncAdminCustomersAdd} />
                    <Route path="/admin/customers" component={asyncAdminCustomers} />

                    <Route path="/admin/dashboard" component={asyncAdminDashboard} />

                    <Route path="/admin/expenses/:expenseId/edit" component={asyncAdminExpensesEdit} />
                    <Route path="/admin/expenses/add" component={asyncAdminExpensesAdd} />
                    <Route path="/admin/expenses" component={asyncAdminExpenses} />

                    <Route path="/admin/features/:featureId/edit" component={asyncAdminFeaturesEdit} />
                    <Route path="/admin/features/add" component={asyncAdminFeaturesAdd} />
                    <Route path="/admin/features" component={asyncAdminFeatures} />

                    <Route path="/admin/languages/:languageId/edit" component={asyncAdminLanguagesEdit} />
                    <Route path="/admin/languages/add" component={asyncAdminLanguagesAdd} />
                    <Route path="/admin/languages" component={asyncAdminLanguages} />

                    <Route path="/admin/methods/:methodId/edit" component={asyncAdminMethodsEdit} />
                    <Route path="/admin/methods/add" component={asyncAdminMethodsAdd} />
                    <Route path="/admin/methods" component={asyncAdminMethods} />

                    <Route path="/admin/quarters/:quarterId/edit" component={asyncAdminQuartersEdit} />
                    <Route path="/admin/quarters/add" component={asyncAdminQuartersAdd} />
                    <Route path="/admin/quarters" component={asyncAdminQuarters} />

                    <Route path="/admin/roles/:roleId/edit" component={asyncAdminRolesEdit} />
                    <Route path="/admin/roles/add" component={asyncAdminRolesAdd} />
                    <Route path="/admin/roles" component={asyncAdminRoles} />

                    <Route path="/admin/settings/language" component={asyncAdminSettingsLanguage} />

                    <Route path="/admin/users/:userId/edit" component={asyncAdminUsersEdit} />
                    <Route path="/admin/users/add" component={asyncAdminUsersAdd} />
                    <Route path="/admin/users" component={asyncAdminUsers} />



                    <Redirect to={`/${role}/dashboard`} />
                </Switch>
            );
        }

        const dataReady = cms !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return dataReady && <Layout>
            {routes}
        </Layout>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
    onGetContent: () => dispatch(actions.getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
