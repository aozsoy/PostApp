import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//import { QueryClient, useQuery } from "@tanstack/react-query";

const Deneme = () => {
  //const [users, setUsers] = useState([]);
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios("https://jsonplaceholder.typicode.com/users").then(
        (response) => response.data
      ),
  });

  if (usersQuery.isLoading) return <Text>Loading...</Text>;
  if (usersQuery.isError) {
    return <Text>{JSON.stringify(usersQuery.error)}</Text>;
  }
  return (
    <>
      {usersQuery.data.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
      {/* {isLoading ? "-Loading" : "-No Loading"}
      {isLoadingError ? "-Loading Error" : "-No Loading Error"}
      {isError ? "-Error" : "-No Error"}
      {isSuccess ? "-Success" : "-No Success"}
      {isFetching ? "-Fetching" : "-No Fetching"}
      {console.log("data", data)} */}
    </>
  );
};

export default Deneme;
