import React, { useContext } from "react";
import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import { GlobalContext } from "../utils/fetch";
import { useLocation } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

const Posts = () => {
  let { state } = useLocation();
  const { postsQuery, commentsQuery } = useContext(GlobalContext);

  return (
    <>
      <Box
        backgroundColor={"grayColor"}
        height="auto"
        width="90%"
        margin="auto"
        marginBottom="100px"
        padding={10}
      >
        <Accordion marginTop="20px" allowMultiple>
          {postsQuery.data
            .filter((post) => post.userId === state.postId)
            .map((post, index) => (
              <AccordionItem
                key={index}
                backgroundColor="whiteColor"
                margin="15px"
                padding="25px"
                borderRadius="30px"
              >
                <Heading>
                  <Text textAlign="center" fontSize="20px" marginBottom="10px">
                    {post.title.toUpperCase()}
                  </Text>
                  <Text textAlign="left" fontSize="18px" fontWeight="normal">
                    {post.body}
                  </Text>
                  <Text textAlign="right" fontSize="16px">
                    {state.username}
                  </Text>
                  <AccordionButton marginTop="10px">
                    <FaRegComments fontSize="20px" />
                    <Text marginLeft="10px">Comments</Text>
                  </AccordionButton>
                </Heading>
                {commentsQuery.data
                  .filter((comment) => post.id === comment.postId)
                  .map((comment, index) => (
                    <AccordionPanel
                      key={index}
                      borderWidth="2px"
                      borderColor="grayColor"
                      borderRadius="20px"
                      marginTop="5px"
                    >
                      <Box display="flex">
                        <Box className="self-center">
                          <BiUserCircle fontSize="30px" />
                        </Box>
                        <Box>
                          <Text
                            fontSize="15px"
                            marginLeft="10px"
                            fontWeight="bold"
                            className="capitalize "
                          >
                            {comment.name}
                          </Text>

                          <Text fontSize="13px" marginLeft="10px">
                            {comment.email}
                          </Text>
                        </Box>
                      </Box>
                      <Text fontSize="16px" marginTop="20px">
                        {comment.body}
                      </Text>
                    </AccordionPanel>
                  ))}
              </AccordionItem>
            ))}
        </Accordion>
      </Box>
    </>
  );
};

export default Posts;
