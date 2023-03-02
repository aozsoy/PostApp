import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import TitleComp from "../components/TitleComp";

const PostsPage = () => {
  return (
    <>
      <Navbar text={"Log out"} />
      <TitleComp title={"POSTS"} />
      <Posts />
    </>
  );
};

export default PostsPage;
