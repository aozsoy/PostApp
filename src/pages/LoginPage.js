import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
//import Deneme from "../components/Deneme";

const LoginPage = () => {
  return (
    <>
      <Navbar text={"Giriş Yap"} />
      {/* <Deneme /> */}
      <Login />
    </>
  );
};

export default LoginPage;
