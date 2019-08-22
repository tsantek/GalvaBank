import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./auth/reducers";

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
