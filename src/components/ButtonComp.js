import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ButtonComp = (props) => {
  const { onclick, path } = props;
  return (
    <>
      <Button
        minWidth="-webkit-fill-available"
        marginTop="50px"
        backgroundColor="white"
        borderRadius="7px"
        onClick={onclick}
        as={Link}
        to={path}
      >
        Giriş yap
      </Button>
    </>
  );
};

export default ButtonComp;
