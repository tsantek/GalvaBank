import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default (store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
));
