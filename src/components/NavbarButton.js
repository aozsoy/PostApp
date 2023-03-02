import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarButton = (props) => {
  const { text } = props;
  return (
    <>
      <Button
        backgroundColor="whiteColor"
        borderRadius="7px"
        margin="20px"
        paddig="10px"
        as={Link}
        to="/"
      >
        {text}
      </Button>
    </>
  );
};

export default NavbarButton;
