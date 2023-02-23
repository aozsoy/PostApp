import React, { useState, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import InputComp from "../components/InputComp";
import LoginButton from "../components/LoginButton";
import { FetchUser } from "../utils/fetch";

const Login = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [path, setPath] = useState("");

  const handleEmail = async (e) => {
    await (<FetchUser />);
    setEmail(e.target.value);
  };

  useEffect(() => {
    users.some((user) => {
      if (user.email === email) {
        console.log("use handleclick içinde");
        setPath("/usertable");
        console.log(path, "path güncellendi");
      }
    });
  });

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
        <LoginButton path={path} />
      </Box>
    </>
  );
};

export default Login;
