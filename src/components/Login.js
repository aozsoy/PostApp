import React, { useState, useContext } from "react";
import { Text, Box, Input, Button } from "@chakra-ui/react";
import { GlobalContext } from "../utils/fetch";
import { Form, useFormik, Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../utils/validation";

const Login = () => {
  const { usersQuery } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [failedTimes, setFailedTimes] = useState(0);

  const onSubmit = async (values) => {
    console.log("values.email", values.email);
    usersQuery.data.some((user) => {
      if (user.email === values.email) {
        navigate("/usertable");
      } else {
        setLoginError("Email is incorrect");
        setFailedTimes(failedTimes + 1);
      }
    });
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
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
        <Formik>
          <>
            <Form onSubmit={formik.handleSubmit}>
              <Input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="E-mail"
                borderWidth={1}
                borderColor="black"
                marginTop="50px"
                variant="outline"
              />
              {formik.errors.email && formik.touched.email ? (
                <Text as="sub" color="red.500" marginLeft="5px">
                  {formik.errors.email}
                </Text>
              ) : (
                ""
              )}
              {loginError && (
                <Text as="sub" color="red.500" marginLeft="5px">
                  {loginError}
                </Text>
              )}
              {failedTimes >= 3 && (
                <Text as="sub" color="red.500" marginLeft="5px">
                  Failed to login 3 times, please refresh your page
                </Text>
              )}
              <ErrorMessage name="email" />
              <Button
                type="submit"
                isDisabled={failedTimes >= 3 ? true : null}
                minWidth="-webkit-fill-available"
                marginTop="50px"
                backgroundColor="white"
                borderRadius="7px"
              >
                Giriş yap
              </Button>
            </Form>
          </>
        </Formik>
      </Box>
    </>
  );
};

export default Login;
