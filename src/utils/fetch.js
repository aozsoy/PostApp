import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) =>
        console.log("Kullanıcı bilgileri alınamadı", { error })
      );
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log("Post bilgileri alınamadı", { error }));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        users,
        posts,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
