import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import TitleComp from "../components/TitleComp";

const PostsPage = () => {
  return (
    <>
      <Navbar text={"Çıkış Yap"} />
      <TitleComp title={"POSTS"} />
      <Posts />
    </>
  );
};

export default PostsPage;
