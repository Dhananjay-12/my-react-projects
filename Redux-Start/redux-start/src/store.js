import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import accountsReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
// const store = createStore(accountsReducer);

const rootReducer = combineReducers({
  account: accountsReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
