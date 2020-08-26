const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    count: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC_COUNTER": {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case "ADD_COUNTER": {
            return {
                ...state,
                count: state.count + action.value
            };;
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(data => {
    console.log("sbscription: ", data);;
})

// Dispatching Actions
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());
