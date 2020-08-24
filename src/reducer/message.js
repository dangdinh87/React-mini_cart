import * as types from './../constants/actionType';
import * as Message from './../constants/messenger';

let initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return [...state]
    }
}


export default message