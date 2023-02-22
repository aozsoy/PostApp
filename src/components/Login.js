import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [path, setPath] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log({ error }));

    users.map((user) => {
      if (user.email === email) {
        console.log("Giriş başarılı");
        setPath("/usertable");
        console.log(path);
      }
    });
  };
  return (
    <>
      <Box
        backgroundColor={"gray.100"}
        height={350}
        width={600}
        margin="auto"
        marginTop="100px"
        padding={10}
      >
        <Text textAlign="center" fontSize="25px">
          Login
        </Text>
        <InputComp onchange={handleEmail} />
        <ButtonComp onclick={handleClick} path={path} />
      </Box>
    </>
  );
};

export default Login;
