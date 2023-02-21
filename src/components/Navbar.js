import React from "react";
import { Text, Box, Button, Link } from "@chakra-ui/react";

const Navbar = () => {
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
      <Link to="/" margin="20px" marginRight="100px" marginInlineStart="auto">
        <Button>Giriş Yap</Button>
      </Link>
    </Box>
  );
};

export default Navbar;
