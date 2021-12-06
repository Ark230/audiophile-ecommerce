import { createStore, applyMiddleware } from "redux";

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
