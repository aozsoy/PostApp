import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const usersResult = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/users").then(
        (response) => response.data
      ),
    suspense: true,
  });

  const postsResult = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/posts").then(
        (response) => response.data
      ),
    suspense: true,
  });

  const commentsResult = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/comments").then(
        (response) => response.data
      ),
    suspense: true,
  });

  return (
    <GlobalContext.Provider
      value={{
        usersResult,
        postsResult,
        commentsResult,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
