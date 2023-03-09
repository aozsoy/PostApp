import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UsersTablePage from "../pages/UsersTablePage";
import PostsPage from "../pages/PostsPage";

const Router = () => {
  let { state } = useLocation();
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="users" element={<UsersTablePage />} />
      <Route path={`users/${state?.userId}/posts`} element={<PostsPage />} />
    </Routes>
  );
};

export default Router;
