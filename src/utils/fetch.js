import { useState } from "react";
import axios from "axios";

export const FetchUser = () => {
  const [users, setUsers] = useState([]);

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .catch((error) => console.log("Kullanıcı bilgileri alınamadı", { error }));

  console.log(users);
};

export const FetchPost = () => {
  const [users, setUsers] = useState([]);

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .catch((error) => console.log("Kullanıcı bilgileri alınamadı", { error }));

  console.log(users);
};
