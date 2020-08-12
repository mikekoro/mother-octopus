import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import AppReducer from './reducers/app';

const CustomMiddleware = store => next => action => {
    next(action);
}

const rootReducer = combineReducers({
    app: AppReducer
});


let Store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, CustomMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default Store;

