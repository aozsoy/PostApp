import React, { useContext } from "react";
//import React, { useState, useEffect } from "react";
import { Text, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/fetch";

const UserTable = () => {
  //const [path, setPath] = useState("");
  const { usersQuery } = useContext(GlobalContext);
  //useEffect(() => setPath("/posts"));

  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        marginTop="50px"
        marginBottom="50px"
        fontWeight="bold"
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
          {usersQuery.data.map((user, index) => (
            <Box
              key={index}
              backgroundColor="whiteAlpha.600"
              margin="10px"
              padding="25px"
              borderRadius="5%"
            >
              <Text textAlign="center" fontSize="20px" fontWeight="bold">
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
                marginTop="10px"
                as={Link}
                to={"/posts"}
                state={{ postId: user.id, username: user.username }}
              >
                {user.username}'s Posts
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default UserTable;
