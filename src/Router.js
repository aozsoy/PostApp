import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersTablePage from "./pages/UsersTablePage";

// Posts
import PostsPage from "./pages/PostsPage";
import Posts from "./components/Posts";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="usertable" element={<UsersTablePage />} />
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
