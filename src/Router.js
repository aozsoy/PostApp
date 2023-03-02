import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersTablePage from "./pages/UsersTablePage";
import PostsPage from "./pages/PostsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="usertable" element={<UsersTablePage />} />
      <Route path="posts" element={<PostsPage />} />
    </Routes>
  );
};

export default Router;
