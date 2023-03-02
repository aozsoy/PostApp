import React from "react";
import Navbar from "../components/Navbar";
import UsersDataTable from "../components/UsersDataTable";
import TitleComp from "../components/TitleComp";

const UsersTablePage = () => {
  return (
    <>
      <Navbar text={"Log out"} />
      <TitleComp title={"USERS"} />
      <UsersDataTable />
    </>
  );
};

export default UsersTablePage;
