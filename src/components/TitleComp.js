import React from "react";
import { Text } from "@chakra-ui/react";
const TitleComp = (props) => {
  const { title } = props;
  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        marginTop="50px"
        marginBottom="50px"
        fontWeight="bold"
      >
        {title}
      </Text>
    </>
  );
};

export default TitleComp;
