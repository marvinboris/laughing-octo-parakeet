import * as actionTypes from './actionTypes';

const prefix = '/api/';



export const resetAdmins = () => ({ type: actionTypes.ADMINS_RESET });
const adminsStart = () => ({ type: actionTypes.ADMINS_START });
const adminsSuccess = data => ({ type: actionTypes.ADMINS_SUCCESS, ...data });
const adminsFail = error => ({ type: actionTypes.ADMINS_FAIL, error });
export const getAdmins = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const getAdmin = id => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const postAdmins = data => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/admins`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const patchAdmins = (id, data) => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/admins/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};

export const deleteAdmins = id => async (dispatch, getState) => {
    dispatch(adminsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/admins/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(adminsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(adminsFail(error));
    }
};



export const resetCanal = () => ({ type: actionTypes.CANAL_RESET });
const canalStart = () => ({ type: actionTypes.CANAL_START });
const canalSuccess = data => ({ type: actionTypes.CANAL_SUCCESS, ...data });
const canalFail = error => ({ type: actionTypes.CANAL_FAIL, error });
export const getFormulae = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/formulae?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const getFormula = id => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/formulae/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const postFormulae = data => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/canal/formulae`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const patchFormulae = (id, data) => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/canal/formulae/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const deleteFormulae = id => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/formulae/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const getSubscriptions = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/subscriptions?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const getSubscription = id => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/subscriptions/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const getSubscriptionsInfo = () => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/subscriptions/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const postSubscriptions = data => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/canal/subscriptions`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const patchSubscriptions = (id, data) => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/canal/subscriptions/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};

export const deleteSubscriptions = id => async (dispatch, getState) => {
    dispatch(canalStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/canal/subscriptions/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(canalSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(canalFail(error));
    }
};



export const resetCities = () => ({ type: actionTypes.CITIES_RESET });
const citiesStart = () => ({ type: actionTypes.CITIES_START });
const citiesSuccess = data => ({ type: actionTypes.CITIES_SUCCESS, ...data });
const citiesFail = error => ({ type: actionTypes.CITIES_FAIL, error });
export const getCities = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(citiesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cities?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const getCity = id => async (dispatch, getState) => {
    dispatch(citiesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cities/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const postCities = data => async (dispatch, getState) => {
    dispatch(citiesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cities`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const patchCities = (id, data) => async (dispatch, getState) => {
    dispatch(citiesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cities/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};

export const deleteCities = id => async (dispatch, getState) => {
    dispatch(citiesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cities/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(citiesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(citiesFail(error));
    }
};



export const resetCms = () => ({ type: actionTypes.CMS_RESET });
const cmsStart = () => ({ type: actionTypes.CMS_START });
const cmsSuccess = data => ({ type: actionTypes.CMS_SUCCESS, ...data });
const cmsFail = error => ({ type: actionTypes.CMS_FAIL, error });
export const getCms = () => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cms`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const postCms = data => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cms`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const patchCms = (id, data) => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/cms/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};

export const deleteCms = id => async (dispatch, getState) => {
    dispatch(cmsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/cms/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(cmsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(cmsFail(error));
    }
};



export const resetCustomers = () => ({ type: actionTypes.CUSTOMERS_RESET });
const customersStart = () => ({ type: actionTypes.CUSTOMERS_START });
const customersSuccess = data => ({ type: actionTypes.CUSTOMERS_SUCCESS, ...data });
const customersFail = error => ({ type: actionTypes.CUSTOMERS_FAIL, error });
export const getCustomers = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(customersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/customers?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const getCustomer = id => async (dispatch, getState) => {
    dispatch(customersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/customers/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const getCustomersInfo = () => async (dispatch, getState) => {
    dispatch(customersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/customers/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const postCustomers = data => async (dispatch, getState) => {
    dispatch(customersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/customers`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const patchCustomers = (id, data) => async (dispatch, getState) => {
    dispatch(customersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const deleteCustomers = id => async (dispatch, getState) => {
    dispatch(customersStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/customers/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};



export const resetDashboard = () => ({ type: actionTypes.DASHBOARD_RESET });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getDashboard = () => async (dispatch, getState) => {
    dispatch(dashboardStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/dashboard`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};



export const resetExpenses = () => ({ type: actionTypes.EXPENSES_RESET });
const expensesStart = () => ({ type: actionTypes.EXPENSES_START });
const expensesSuccess = data => ({ type: actionTypes.EXPENSES_SUCCESS, ...data });
const expensesFail = error => ({ type: actionTypes.EXPENSES_FAIL, error });
export const getExpenses = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(expensesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/expenses?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(expensesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(expensesFail(error));
    }
};

export const getExpense = id => async (dispatch, getState) => {
    dispatch(expensesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/expenses/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(expensesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(expensesFail(error));
    }
};

export const getExpensesInfo = () => async (dispatch, getState) => {
    dispatch(expensesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/expenses/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(expensesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(expensesFail(error));
    }
};

export const postExpenses = data => async (dispatch, getState) => {
    dispatch(expensesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/expenses`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(expensesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(expensesFail(error));
    }
};

export const patchExpenses = (id, data) => async (dispatch, getState) => {
    dispatch(expensesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/expenses/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(expensesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(expensesFail(error));
    }
};

export const deleteExpenses = id => async (dispatch, getState) => {
    dispatch(expensesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/expenses/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(expensesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(expensesFail(error));
    }
};



export const resetFeatures = () => ({ type: actionTypes.FEATURES_RESET });
const featuresStart = () => ({ type: actionTypes.FEATURES_START });
const featuresSuccess = data => ({ type: actionTypes.FEATURES_SUCCESS, ...data });
const featuresFail = error => ({ type: actionTypes.FEATURES_FAIL, error });
export const getFeatures = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const getFeature = id => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const postFeatures = data => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/features`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const patchFeatures = (id, data) => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/features/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};

export const deleteFeatures = id => async (dispatch, getState) => {
    dispatch(featuresStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/features/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(featuresSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(featuresFail(error));
    }
};



export const resetLanguages = () => ({ type: actionTypes.LANGUAGES_RESET });
const languagesStart = () => ({ type: actionTypes.LANGUAGES_START });
const languagesSuccess = data => ({ type: actionTypes.LANGUAGES_SUCCESS, ...data });
const languagesFail = error => ({ type: actionTypes.LANGUAGES_FAIL, error });
export const getLanguages = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const getLanguage = id => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const postLanguages = data => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/languages`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const patchLanguages = (id, data) => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/languages/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};

export const deleteLanguages = id => async (dispatch, getState) => {
    dispatch(languagesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/languages/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(languagesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(languagesFail(error));
    }
};



export const resetMethods = () => ({ type: actionTypes.METHODS_RESET });
const methodsStart = () => ({ type: actionTypes.METHODS_START });
const methodsSuccess = data => ({ type: actionTypes.METHODS_SUCCESS, ...data });
const methodsFail = error => ({ type: actionTypes.METHODS_FAIL, error });
export const getMethods = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/methods?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const getMethod = id => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/methods/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const postMethods = data => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/methods`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const patchMethods = (id, data) => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/methods/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};

export const deleteMethods = id => async (dispatch, getState) => {
    dispatch(methodsStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/methods/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(methodsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(methodsFail(error));
    }
};



export const resetQuarters = () => ({ type: actionTypes.QUARTERS_RESET });
const quartersStart = () => ({ type: actionTypes.QUARTERS_START });
const quartersSuccess = data => ({ type: actionTypes.QUARTERS_SUCCESS, ...data });
const quartersFail = error => ({ type: actionTypes.QUARTERS_FAIL, error });
export const getQuarters = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(quartersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/quarters?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(quartersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(quartersFail(error));
    }
};

export const getQuarter = id => async (dispatch, getState) => {
    dispatch(quartersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/quarters/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(quartersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(quartersFail(error));
    }
};

export const getQuartersInfo = () => async (dispatch, getState) => {
    dispatch(quartersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/quarters/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(quartersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(quartersFail(error));
    }
};

export const postQuarters = data => async (dispatch, getState) => {
    dispatch(quartersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/quarters`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(quartersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(quartersFail(error));
    }
};

export const patchQuarters = (id, data) => async (dispatch, getState) => {
    dispatch(quartersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/quarters/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(quartersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(quartersFail(error));
    }
};

export const deleteQuarters = id => async (dispatch, getState) => {
    dispatch(quartersStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/quarters/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(quartersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(quartersFail(error));
    }
};



export const resetRoles = () => ({ type: actionTypes.ROLES_RESET });
const rolesStart = () => ({ type: actionTypes.ROLES_START });
const rolesSuccess = data => ({ type: actionTypes.ROLES_SUCCESS, ...data });
const rolesFail = error => ({ type: actionTypes.ROLES_FAIL, error });
export const getRoles = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const getRole = id => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const getRolesInfo = () => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const postRoles = data => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/roles`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const patchRoles = (id, data) => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/roles/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};

export const deleteRoles = id => async (dispatch, getState) => {
    dispatch(rolesStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/roles/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(rolesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(rolesFail(error));
    }
};



export const resetUsers = () => ({ type: actionTypes.USERS_RESET });
const usersStart = () => ({ type: actionTypes.USERS_START });
const usersSuccess = data => ({ type: actionTypes.USERS_SUCCESS, ...data });
const usersFail = error => ({ type: actionTypes.USERS_FAIL, error });
export const getUsers = (page = 1, show = 10, search = '') => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users?page=${page}&show=${show}&search=${search}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const getUser = id => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const getUsersInfo = () => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/info`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const postUsers = data => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const patchUsers = (id, data) => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(`${prefix + role}/users/${id}`, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token,
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};

export const deleteUsers = id => async (dispatch, getState) => {
    dispatch(usersStart());
    const { role } = getState().auth;

    try {
        const page = document.getElementById('table-page').value;
        const show = document.getElementById('table-show').value;
        const search = document.getElementById('table-search').value;

        const token = localStorage.getItem('token');
        const res = await fetch(`${prefix + role}/users/${id}?page=${page}&show=${show}&search=${search}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(usersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(usersFail(error));
    }
};