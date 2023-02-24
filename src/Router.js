import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserTablePage from "./pages/UserTablePage";

// Posts
import PostsPage from "./pages/PostsPage";
import Posts from "./components/Posts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="usertable" element={<UserTablePage />} />
      <Route
        path="posts"
        element={
          <PostsPage>
            <Posts />
          </PostsPage>
        }
      />
    </Routes>
  );
};

export default Router;
