import Actions from "./actions";

const initialState = {
    count: 5
}

// Reducer
const counterReducer = (state = initialState, action) => {
    var newState = { ...state };
    switch (action.type) {
        case Actions.INC: {
            newState.count += 1;
            break;
        }
        case Actions.ADD: {
            newState.count += action.value;
            break;
        }
        case Actions.DEC: {
            newState.count -= 1;
            break;
        }
        case Actions.SUB: {
            newState.count -= action.value;
            break;
        }
    }
    return newState;
}

export default counterReducer;
