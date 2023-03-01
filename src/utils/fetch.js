import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/users").then(
        (response) => response.data
      ),
  });

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/posts").then(
        (response) => response.data
      ),
  });

  const commentsQuery = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/comments").then(
        (response) => response.data
      ),
  });

  if (usersQuery.isLoading) return <div>Loading...</div>;
  if (usersQuery.isError) {
    return <pre>{JSON.stringify(usersQuery.error)}</pre>;
  }

  if (postsQuery.isLoading) return <div>Loading...</div>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  if (commentsQuery.isLoading) return <div>Loading...</div>;
  if (commentsQuery.isError) {
    return <pre>{JSON.stringify(commentsQuery.error)}</pre>;
  }

  return (
    <GlobalContext.Provider
      value={{
        usersQuery,
        postsQuery,
        commentsQuery,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
