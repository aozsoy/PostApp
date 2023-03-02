import React from "react";
import { Text, Box } from "@chakra-ui/react";
import NavbarButton from "./NavbarButton";

const Navbar = (props) => {
  const { text } = props;
  return (
    <Box
      width="100%"
      top={0}
      display="flex"
      backgroundColor="grayColor"
      justifyContent="space-around"
    >
      <Text textAlign={"center"} padding="20px" fontSize={30}>
        POST APP
      </Text>
      <NavbarButton text={text} />
    </Box>
  );
};

export default Navbar;
