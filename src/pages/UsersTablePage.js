import React from "react";
import Navbar from "../components/Navbar";
import UsersDataTable from "../components/UsersDataTable";

const UsersTablePage = () => {
  return (
    <>
      <Navbar text={"Çıkış Yap"} />
      <UsersDataTable />
    </>
  );
};

export default UsersTablePage;
