import {createStore} from "redux";
import counterReducer from "../reducers/activities";
import {devToolsEnhancer} from "redux-devtools-extension";

export default createStore(counterReducer, devToolsEnhancer({}))