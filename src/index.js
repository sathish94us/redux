import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import  { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/counter';
import resultReducer from './store/result';

var rootReducer = combineReducers({
    counter: counterReducer,
    result: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
