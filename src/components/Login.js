import React, { useState, useEffect, useContext } from "react";
import { Text, Box } from "@chakra-ui/react";
import InputComp from "../components/InputComp";
import LoginButton from "../components/LoginButton";
import { GlobalContext } from "../utils/fetch";

const Login = () => {
  const [email, setEmail] = useState("");
  const [path, setPath] = useState("");
  const { users } = useContext(GlobalContext);

  useEffect(() => {
    users.some((user) => {
      if (user.email === email) {
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
        <InputComp
          onchange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <LoginButton path={path} />
      </Box>
    </>
  );
};

export default Login;
