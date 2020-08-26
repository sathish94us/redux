import Actions from "./actions";

const initialState = {
    results: []
}

// Reducer
const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.STORE: {
            return {
                ...state,
                results: state.results.concat({type: action.type, value: action.value, timestamp: action.timestamp})
            }
        }
        case Actions.DEL: {
            const updatedArray = state.results.filter(result => result.timestamp !== action.value);
            return {
                ...state,
                results: updatedArray
            }
        }
    }
    return state;
}

export default resultReducer;
