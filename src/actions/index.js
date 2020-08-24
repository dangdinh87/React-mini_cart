import * as types from './../constants/actionType';

export const addToCard = (product, quanlity, message) => {
    return {
        type: types.ADD_TO_CARD,
        product,
        quanlity,
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const deleteToCard = (product) => {
    return {
        type: types.DELETE_CARD,
        product,
    }
}

export const updateQuanlity = (product, quanlity) => {
    return {
        type: types.UPDATE_QUANLITY,
        product,
        quanlity
    }
}