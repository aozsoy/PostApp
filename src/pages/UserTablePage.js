import React from "react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";

const UserTablePage = () => {
  return (
    <>
      <Navbar text={"Çıkış Yap"} />
      <UserTable />
    </>
  );
};

export default UserTablePage;
