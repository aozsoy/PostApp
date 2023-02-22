import React from "react";
import { Input } from "@chakra-ui/react";

const InputComp = (props) => {
  const { onchange } = props;

  return (
    <>
      <Input
        borderWidth={1}
        borderColor="black"
        marginTop="50px"
        variant="outline"
        placeholder="E-mail"
        onChange={onchange}
      />
    </>
  );
};

export default InputComp;
