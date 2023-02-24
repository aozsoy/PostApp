import React, { useContext } from "react";
import {
  Text,
  Box,
  SimpleGrid,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import { GlobalContext } from "../utils/fetch";
import { useLocation } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";

const Posts = () => {
  let { state } = useLocation();
  //console.log("asafsda==>", state);

  const { posts } = useContext(GlobalContext);

  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        marginTop="50px"
        marginBottom="50px"
        fontWeight="bold"
      >
        POSTS
      </Text>
      <Box
        backgroundColor={"gray.100"}
        height="auto"
        width="90%"
        margin="auto"
        marginBottom="100px"
        padding={10}
      >
        {/* <SimpleGrid marginTop="20px" templateColumns={"1fr"}>
          {posts
            .filter((post) => post.userId === state.postId)
            .map((post, index) => (
              <Box
                key={index}
                backgroundColor="whiteAlpha.600"
                margin="15px"
                padding="25px"
                borderRadius="5%"
              >
                <Text
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="bold"
                  marginBottom="10px"
                >
                  {post.title.toUpperCase()}
                </Text>
                <Text textAlign="left" fontSize="18px">
                  {post.body}
                </Text>
                <Text textAlign="right" fontSize="16px">
                  {state.username}-{post.id}
                </Text>
                <Button backgroundColor="white" borderRadius="7px">
                  Comments
                </Button>
              </Box>
            ))}
        </SimpleGrid> */}
        <Accordion marginTop="20px" allowMultiple>
          {posts
            .filter((post) => post.userId === state.postId)
            .map((post, index) => (
              <AccordionItem
                key={index}
                backgroundColor="whiteAlpha.600"
                margin="15px"
                padding="25px"
                borderRadius="5%"
              >
                <Heading>
                  <Text
                    textAlign="center"
                    fontSize="20px"
                    fontWeight="bold"
                    marginBottom="10px"
                  >
                    {post.title.toUpperCase()}
                  </Text>

                  <Text textAlign="left" fontSize="18px">
                    {post.body}
                  </Text>
                  <Text textAlign="right" fontSize="16px">
                    {state.username}-{post.id}
                  </Text>
                  <AccordionButton>
                    <FaRegComments fontSize="18px" />
                    <Text marginLeft="5px">Comments</Text>
                  </AccordionButton>
                </Heading>
                <AccordionPanel inlineSize="max-content">
                  <Text textAlign="right" fontSize="16px">
                    {state.username}-{post.id}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Box>
    </>
  );
};

export default Posts;
