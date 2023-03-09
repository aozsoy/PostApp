import { createContext, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export const GlobalContext = createContext();
export const initialState = {
  loading: false,
  errorMessage: "",
  auth: false,
  user: [],
};
export const GlobalProvider = (props) => {
  const loginReducer = (initialState, action) => {
    switch (action.type) {
      case "LOGIN_PENDING":
        return { ...initialState, loading: true };
      case "LOGIN_SUCCESS":
        return {
          ...initialState,
          loading: false,
          auth: true,
          user: action.user,
        };
      case "LOGIN_ERROR":
        return {
          ...initialState,
          loading: false,
          auth: false,
          errorMessage: action.error,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  console.log("state", state);

  const usersResult = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      api()
        .get(`/users`)
        .then((response) => response.data),
    suspense: true,
  });

  const commentsResult = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      api()
        .get(`/comments`)
        .then((response) => response.data),
    suspense: true,
  });

  return (
    <GlobalContext.Provider
      value={{
        usersResult,
        commentsResult,
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
