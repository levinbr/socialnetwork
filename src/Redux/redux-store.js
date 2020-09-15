import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducers from "./users-reducers";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducers,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//const store = createStore(reducers, applyMiddleware(thunk)));

window.store = store;

export default store;