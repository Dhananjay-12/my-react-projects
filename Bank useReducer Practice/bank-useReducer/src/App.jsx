import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "closedAccount": {
      if (state.balance === 0 || state.loan === 0) return { ...initialState };
      else return { ...state };
    }
    case "openedAccount":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state?.balance + 150 };
    case "withdraw":
      if (state.balance - 50 >= 0)
        return { ...state, balance: state.balance - 50 };
      else return { ...state };
    case "loan": {
      if (state.loan === 0)
        return { ...state, balance: state.balance + 5000, loan: 5000 };
      else return { ...state };
    }
    case "payLoan": {
      if (state.balance - 5000 >= 0)
        return { ...state, balance: state.balance - 5000, loan: 0 };
      else return { ...state };
    }
    default:
      throw new Error("Unkown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openedAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "loan" });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closedAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
