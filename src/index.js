import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_ANSWERS':
            return {
                ...state,
                [action.payload.propertyName]: action.payload.rating
            };
        default:
            return state;
    }
}

const allReducers = combineReducers({
    feedback,
});

const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));





