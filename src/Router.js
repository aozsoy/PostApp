import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserTablePage from "./pages/UserTablePage";
import PostsPage from "./pages/PostsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/usertable" element={<UserTablePage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  );
};

export default Router;
