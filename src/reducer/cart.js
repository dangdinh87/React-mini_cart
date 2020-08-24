import * as types from './../constants/actionType';

let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : []



export const cart = (state = initialState, action) => {
    let { product, quanlity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CARD:
            index = state.findIndex(x => x.product.id === product.id)
            if (index !== -1) {
                state[index].quanlity += quanlity;
            } else {
                state.push({ product, quanlity });
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        case types.DELETE_CARD:
            state.splice(product, 1);
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        case types.UPDATE_QUANLITY:
            index = state.findIndex(x => x.product.id === product.id)
            state[index].quanlity += quanlity
            if (state[index].quanlity < 1) {
                if (window.confirm("Bạn muốn xóa khỏi giỏ hàng! "))
                    state.splice(product, 1);
                else
                    state[index].quanlity += 1
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}


export default cart