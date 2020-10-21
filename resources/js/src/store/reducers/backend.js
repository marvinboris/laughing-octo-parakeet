import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    admins: {
        loading: false,
        error: null
    },
    canal: {
        loading: false,
        error: null
    },
    cities: {
        loading: false,
        error: null
    },
    cms: {
        loading: false,
        error: null
    },
    customers: {
        loading: false,
        error: null
    },
    dashboard: {
        loading: false,
        error: null
    },
    expenses: {
        loading: false,
        error: null
    },
    features: {
        loading: false,
        error: null
    },
    languages: {
        loading: false,
        error: null
    },
    methods: {
        loading: false,
        error: null
    },
    quarters: {
        loading: false,
        error: null
    },
    roles: {
        loading: false,
        error: null
    },
    users: {
        loading: false,
        error: null
    },
};

const adminsReset = (state, action) => updateObject(state, { admins: initialState.admins });
const adminsStart = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: true, message: null }) });
const adminsSuccess = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: false, error: null, ...action }) });
const adminsFail = (state, action) => updateObject(state, { admins: updateObject(state.admins, { loading: false, ...action }) });

const canalReset = (state, action) => updateObject(state, { canal: initialState.canal });
const canalStart = (state, action) => updateObject(state, { canal: updateObject(state.canal, { loading: true, message: null }) });
const canalSuccess = (state, action) => updateObject(state, { canal: updateObject(state.canal, { loading: false, error: null, ...action }) });
const canalFail = (state, action) => updateObject(state, { canal: updateObject(state.canal, { loading: false, ...action }) });

const citiesReset = (state, action) => updateObject(state, { cities: initialState.cities });
const citiesStart = (state, action) => updateObject(state, { cities: updateObject(state.cities, { loading: true, message: null }) });
const citiesSuccess = (state, action) => updateObject(state, { cities: updateObject(state.cities, { loading: false, error: null, ...action }) });
const citiesFail = (state, action) => updateObject(state, { cities: updateObject(state.cities, { loading: false, ...action }) });

const cmsReset = (state, action) => updateObject(state, { cms: initialState.cms });
const cmsStart = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: true, message: null }) });
const cmsSuccess = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: false, error: null, ...action }) });
const cmsFail = (state, action) => updateObject(state, { cms: updateObject(state.cms, { loading: false, ...action }) });

const customersReset = (state, action) => updateObject(state, { customers: initialState.customers });
const customersStart = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: true, message: null }) });
const customersSuccess = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: false, error: null, ...action }) });
const customersFail = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: false, ...action }) });

const dashboardReset = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const expensesReset = (state, action) => updateObject(state, { expenses: initialState.expenses });
const expensesStart = (state, action) => updateObject(state, { expenses: updateObject(state.expenses, { loading: true, message: null }) });
const expensesSuccess = (state, action) => updateObject(state, { expenses: updateObject(state.expenses, { loading: false, error: null, ...action }) });
const expensesFail = (state, action) => updateObject(state, { expenses: updateObject(state.expenses, { loading: false, ...action }) });

const featuresReset = (state, action) => updateObject(state, { features: initialState.features });
const featuresStart = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: true, message: null }) });
const featuresSuccess = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: false, error: null, ...action }) });
const featuresFail = (state, action) => updateObject(state, { features: updateObject(state.features, { loading: false, ...action }) });

const languagesReset = (state, action) => updateObject(state, { languages: initialState.languages });
const languagesStart = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: true, message: null }) });
const languagesSuccess = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: false, error: null, ...action }) });
const languagesFail = (state, action) => updateObject(state, { languages: updateObject(state.languages, { loading: false, ...action }) });

const methodsReset = (state, action) => updateObject(state, { methods: initialState.methods });
const methodsStart = (state, action) => updateObject(state, { methods: updateObject(state.methods, { loading: true, message: null }) });
const methodsSuccess = (state, action) => updateObject(state, { methods: updateObject(state.methods, { loading: false, error: null, ...action }) });
const methodsFail = (state, action) => updateObject(state, { methods: updateObject(state.methods, { loading: false, ...action }) });

const quartersReset = (state, action) => updateObject(state, { quarters: initialState.quarters });
const quartersStart = (state, action) => updateObject(state, { quarters: updateObject(state.quarters, { loading: true, message: null }) });
const quartersSuccess = (state, action) => updateObject(state, { quarters: updateObject(state.quarters, { loading: false, error: null, ...action }) });
const quartersFail = (state, action) => updateObject(state, { quarters: updateObject(state.quarters, { loading: false, ...action }) });

const rolesReset = (state, action) => updateObject(state, { roles: initialState.roles });
const rolesStart = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: true, message: null }) });
const rolesSuccess = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: false, error: null, ...action }) });
const rolesFail = (state, action) => updateObject(state, { roles: updateObject(state.roles, { loading: false, ...action }) });

const usersReset = (state, action) => updateObject(state, { users: initialState.users });
const usersStart = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: true, message: null }) });
const usersSuccess = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: false, error: null, ...action }) });
const usersFail = (state, action) => updateObject(state, { users: updateObject(state.users, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMINS_RESET: return adminsReset(state, action);
        case actionTypes.ADMINS_START: return adminsStart(state, action);
        case actionTypes.ADMINS_SUCCESS: return adminsSuccess(state, action);
        case actionTypes.ADMINS_FAIL: return adminsFail(state, action);

        case actionTypes.CANAL_RESET: return canalReset(state, action);
        case actionTypes.CANAL_START: return canalStart(state, action);
        case actionTypes.CANAL_SUCCESS: return canalSuccess(state, action);
        case actionTypes.CANAL_FAIL: return canalFail(state, action);

        case actionTypes.CITIES_RESET: return citiesReset(state, action);
        case actionTypes.CITIES_START: return citiesStart(state, action);
        case actionTypes.CITIES_SUCCESS: return citiesSuccess(state, action);
        case actionTypes.CITIES_FAIL: return citiesFail(state, action);

        case actionTypes.CMS_RESET: return cmsReset(state, action);
        case actionTypes.CMS_START: return cmsStart(state, action);
        case actionTypes.CMS_SUCCESS: return cmsSuccess(state, action);
        case actionTypes.CMS_FAIL: return cmsFail(state, action);

        case actionTypes.CUSTOMERS_RESET: return customersReset(state, action);
        case actionTypes.CUSTOMERS_START: return customersStart(state, action);
        case actionTypes.CUSTOMERS_SUCCESS: return customersSuccess(state, action);
        case actionTypes.CUSTOMERS_FAIL: return customersFail(state, action);

        case actionTypes.DASHBOARD_RESET: return dashboardReset(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.EXPENSES_RESET: return expensesReset(state, action);
        case actionTypes.EXPENSES_START: return expensesStart(state, action);
        case actionTypes.EXPENSES_SUCCESS: return expensesSuccess(state, action);
        case actionTypes.EXPENSES_FAIL: return expensesFail(state, action);

        case actionTypes.FEATURES_RESET: return featuresReset(state, action);
        case actionTypes.FEATURES_START: return featuresStart(state, action);
        case actionTypes.FEATURES_SUCCESS: return featuresSuccess(state, action);
        case actionTypes.FEATURES_FAIL: return featuresFail(state, action);

        case actionTypes.LANGUAGES_RESET: return languagesReset(state, action);
        case actionTypes.LANGUAGES_START: return languagesStart(state, action);
        case actionTypes.LANGUAGES_SUCCESS: return languagesSuccess(state, action);
        case actionTypes.LANGUAGES_FAIL: return languagesFail(state, action);

        case actionTypes.METHODS_RESET: return methodsReset(state, action);
        case actionTypes.METHODS_START: return methodsStart(state, action);
        case actionTypes.METHODS_SUCCESS: return methodsSuccess(state, action);
        case actionTypes.METHODS_FAIL: return methodsFail(state, action);

        case actionTypes.QUARTERS_RESET: return quartersReset(state, action);
        case actionTypes.QUARTERS_START: return quartersStart(state, action);
        case actionTypes.QUARTERS_SUCCESS: return quartersSuccess(state, action);
        case actionTypes.QUARTERS_FAIL: return quartersFail(state, action);

        case actionTypes.ROLES_RESET: return rolesReset(state, action);
        case actionTypes.ROLES_START: return rolesStart(state, action);
        case actionTypes.ROLES_SUCCESS: return rolesSuccess(state, action);
        case actionTypes.ROLES_FAIL: return rolesFail(state, action);

        case actionTypes.USERS_RESET: return usersReset(state, action);
        case actionTypes.USERS_START: return usersStart(state, action);
        case actionTypes.USERS_SUCCESS: return usersSuccess(state, action);
        case actionTypes.USERS_FAIL: return usersFail(state, action);

        default: return state;
    }
};