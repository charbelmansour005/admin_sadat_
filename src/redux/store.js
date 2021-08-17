import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postReducer from "./reducer";
const rootReducer = combineReducers({
  postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
