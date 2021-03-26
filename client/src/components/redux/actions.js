import {STEP_INCREMENT, RESET_VALUE, FLOORS_AMOUNT, TYPE_STRUCTURE, TYPE_MATERIAL, RESULT} from "./types";

export function addUserInformation(inputUserInformation) {
    return {
        type: STEP_INCREMENT
    }
}



export function getResult(state, length, height) {
    const building = state.typOfChosenStructure;
    const floors = state.floorsAmount;
    const material = state.chosenMaterial;
    return async dispatch => {
        const response = await fetch(`https://data.techart.ru/lab/json/?building=${building}&height=${floors}` +
            `&material=${material}&sizex=${Number(length)}&sizey=${Number(height)}`)
        const json = await response.json();
        console.log(json)
        dispatch({type: RESULT, payload: json})
    }
}