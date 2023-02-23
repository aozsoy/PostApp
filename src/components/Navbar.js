import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { text } = props;
  return (
    <Box display="flex" backgroundColor="gray.100">
      <Text
        textAlign={"center"}
        padding="20px"
        marginLeft="100px"
        fontSize={30}
      >
        POST APP
      </Text>
      <Link className="ml-auto mr-24" to="/">
        <Button
          backgroundColor="white"
          borderRadius="7px"
          margin="20px"
          paddig="10px"
        >
          {text}
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
