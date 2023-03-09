import React, { useState, useContext, useMemo } from "react";
import { Text, Box } from "@chakra-ui/react";
import { GlobalContext } from "../utils/Context";
import { Form, useFormik, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../utils/validation";
import InputLogin from "./InputLogin";
import ButtonLogin from "./ButtonLogin";

const ATTEMPT_COUNT = 3;

const isExceedTheAttemptCount = (size) => size >= ATTEMPT_COUNT;

const Login = () => {
  const { usersResult, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [failedTimes, setFailedTimes] = useState(0);
  const isExceed = useMemo(
    () => isExceedTheAttemptCount(failedTimes),
    [failedTimes]
  );

  const onSubmit = async (values) => {
    dispatch({ type: "LOGIN_PENDING" });
    const isEmailExists = usersResult.data.some(
      (user) => user.email === values.email
    );
    if (isEmailExists) {
      dispatch({
        type: "LOGIN_SUCCESS",
        user: values.email,
      });
      navigate("/users");
    } else {
      dispatch({ type: "LOGIN_ERROR", error: "Email is incorrect" });
      setLoginError("Email is incorrect");
      setFailedTimes((prev) => prev + 1);
    }
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
        backgroundColor={"grayColor"}
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
              <InputLogin
                name={"email"}
                value={formik.values.email}
                onchange={formik.handleChange}
                onblur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <Text as="sub" color="redColor" marginLeft="5px">
                  {formik.errors.email}
                </Text>
              ) : (
                ""
              )}
              {loginError && (
                <Text as="sub" color="redColor" marginLeft="5px">
                  {loginError}
                </Text>
              )}
              {isExceed && (
                <Text
                  as="sub"
                  color="redColor"
                  display="block"
                  marginTop="5px"
                  marginLeft="5px"
                >
                  Failed to login 3 times, please refresh your page
                </Text>
              )}
              <ButtonLogin type={"submit"} isdisabled={isExceed} />
            </Form>
          </>
        </Formik>
      </Box>
    </>
  );
};

export default Login;
