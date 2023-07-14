import thunk from "redux-thunk";
import accountsReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";
// const store = createStore(accountsReducer);

const store = configureStore({
  reducer: {
    account: accountsReducer,
    customer: customerReducer,
  },
});

export default store;
