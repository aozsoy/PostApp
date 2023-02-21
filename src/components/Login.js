import React from "react";
import { Text, Box } from "@chakra-ui/react";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";

const Login = () => {
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
        <InputComp />
        <ButtonComp />
      </Box>
    </>
  );
};

export default Login;
