import {ADD_USER_INFORMATION} from "./types";

const initialState = {
    userInformation: []
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_INFORMATION:
            return {...state, userInformation: action.payload}
        default:
            return state
    }
}