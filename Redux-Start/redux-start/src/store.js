import { combineReducers, createStore } from "redux";
import accountsReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
// const store = createStore(accountsReducer);

const rootReducer = combineReducers({
  account: accountsReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
