import React from "react";
import { Input } from "@chakra-ui/react";

const InputLogin = (props) => {
  const { onchange, name, value, onblur } = props;

  return (
    <>
      <Input
        name={name}
        value={value}
        borderWidth={1}
        borderColor="blackColor"
        marginTop="50px"
        variant="outline"
        placeholder="E-mail"
        onChange={onchange}
        onBlur={onblur}
      />
    </>
  );
};

export default InputLogin;
