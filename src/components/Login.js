import React, { useState, useEffect, useContext } from "react";
import { Text, Box, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import InputComp from "../components/InputComp";
//import LoginButton from "../components/LoginButton";
import { GlobalContext } from "../utils/fetch";
import { Formik, Form } from "formik";
import { UserEmailValidation } from "../utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [path, setPath] = useState("");
  const { usersQuery } = useContext(GlobalContext);
  console.log(email);

  useEffect(() => {
    usersQuery.data.some((user) => {
      if (user.email === email) {
        setPath("/usertable");
        console.log(path, "path güncellendi");
      } else {
        console.log("E-mail hatalı");
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
        {/* <InputComp
          onchange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <LoginButton path={path} /> */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={UserEmailValidation()}
        >
          {({ errors, handleSubmit, handleChange, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  borderWidth={1}
                  borderColor="black"
                  marginTop="50px"
                  variant="outline"
                />
                {errors.email && touched.email && (
                  <Text as="sub" color="red.500">
                    {errors.email}
                  </Text>
                )}
                <Button
                  type="submit"
                  minWidth="-webkit-fill-available"
                  marginTop="50px"
                  backgroundColor="white"
                  borderRadius="7px"
                  //as={Link}
                  //to={path}
                >
                  Giriş yap
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Login;
