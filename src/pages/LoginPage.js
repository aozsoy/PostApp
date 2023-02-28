import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <Navbar text={"Giriş Yap"} />
      <Login />
    </>
  );
};

export default LoginPage;
