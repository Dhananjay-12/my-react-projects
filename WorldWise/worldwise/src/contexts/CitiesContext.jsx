import { createContext, useEffect, useContext, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(" http://localhost:3000/cities");
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({ type: "rejected", payload: "Error fetching cities" });
      }
    }
    getCities();
  }, []);

  async function getCity(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:3000/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "Error fetching city" });
    }
  }
  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:3000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      dispatch({ type: "cities/created", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "Error creating cities" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`http://localhost:3000/cities${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected", payload: "Error deleting city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesCcontext was outside the citiesProvider");
  return context;
}

export { CitiesProvider, useCities };
