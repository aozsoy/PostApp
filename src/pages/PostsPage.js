import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const PostsPage = () => {
  return (
    <>
      <Navbar text={"Çıkış Yap"} />
      <Posts />
    </>
  );
};

export default PostsPage;
