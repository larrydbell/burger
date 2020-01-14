import * as ActionTypes from './actionTypes';
import axios from '../../axios-orders';

export const puchaseBurgerSuccess = (id, orderData) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };

};

export const purchaseBurgerStart = () => {
    return {
        type: ActionTypes.PURCHASE_BURGER_START
    };

};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then(response => {
            console.log(response.data);
            dispatch(puchaseBurgerSuccess(response.data,orderData));
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error));
        });
    };
};