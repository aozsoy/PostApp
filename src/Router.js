import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserTablePage from "./pages/UserTablePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/usertable" element={<UserTablePage />} />
    </Routes>
  );
};

export default Router;
