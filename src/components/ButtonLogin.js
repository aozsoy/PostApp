import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonLogin = (props) => {
  const { type, isdisabled } = props;
  return (
    <>
      <Button
        type={type}
        minWidth="-webkit-fill-available"
        marginTop="50px"
        backgroundColor="whiteColor"
        borderRadius="7px"
        isDisabled={isdisabled}
      >
        Giriş yap
      </Button>
    </>
  );
};

export default ButtonLogin;
