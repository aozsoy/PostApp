import { createContext } from "react";
//import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  // const [users, setUsers] = useState([]);
  //const [posts, setPosts] = useState([]);
  //const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => setUsers(response.data))
  //     .catch((error) =>
  //       console.log("Kullanıcı bilgileri alınamadı", { error })
  //     );
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setPosts(response.data))
  //     .catch((error) => console.log("Post bilgileri alınamadı", { error }));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => setComments(response.data))
  //     .catch((error) => console.log("Yorum bilgileri alınamadı", { error }));
  // }, []);

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
        //users,
        //posts,
        //comments,
        usersQuery,
        postsQuery,
        commentsQuery,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
