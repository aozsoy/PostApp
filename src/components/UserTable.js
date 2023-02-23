import React, { useState } from "react";
import { Text, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FetchUser } from "../utils/fetch";
import Posts from "./Posts";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [path, setPath] = useState("");

  <FetchUser />;

  const handleClick = (index) => {
    console.log(index);
    setPath("/posts");
    console.log(path, "path güncellendi");
    <Posts id={index} />;
  };

  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        marginTop="50px"
        marginBottom="50px"
      >
        USERS
      </Text>
      <Box
        backgroundColor={"gray.100"}
        height="auto"
        width="90%"
        margin="auto"
        marginBottom="100px"
        padding={10}
      >
        <SimpleGrid marginTop="20px" templateColumns={"1fr 1fr"}>
          {users.map((user, index) => (
            <>
              <Box
                key={index}
                backgroundColor="whiteAlpha.600"
                margin="10px"
                padding="25px"
                borderRadius="5%"
              >
                <Text textAlign="center" fontSize="18px">
                  {user.username}
                </Text>
                <Text textAlign="left" fontSize="18px">
                  Name: {user.name}
                </Text>
                <Text textAlign="left" fontSize="18px">
                  Phone: {user.phone}
                </Text>
                <Text textAlign="left" fontSize="18px">
                  Website: {user.website}
                </Text>
                <Text textAlign="left" fontSize="18px">
                  Company: {user.company.name}
                </Text>
                <Text textAlign="left" fontSize="18px">
                  Adress: {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </Text>
                <Button
                  minWidth="-webkit-fill-available"
                  alignSelf="center"
                  backgroundColor="white"
                  borderRadius="7px"
                  key={index}
                  marginTop="10px"
                  onClick={() => handleClick(index)}
                  as={Link}
                  to={path}
                >
                  {user.username}'s Posts
                </Button>
              </Box>
            </>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default UserTable;
