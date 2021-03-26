import {ADD_USER_INFORMATION} from "./types";

export function addUsersInformation(inputValues={notInfo:true}) {
    return async dispatch => {
        const url = "users/information";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputValues)
        })
        const json = await response.json();
        dispatch({type: ADD_USER_INFORMATION, payload: json})
    }
}
