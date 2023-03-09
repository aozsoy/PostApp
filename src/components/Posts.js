import React, { useContext, useState } from "react";
import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import { GlobalContext } from "../utils/Context";
import { useLocation } from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { api } from "../utils/api";

const Posts = () => {
  let { state } = useLocation();
  const { commentsResult } = useContext(GlobalContext);
  const [postList, setPostList] = useState([]);

  api()
    .get(`/users/${state?.userId}/posts`)
    .then((response) => setPostList(response.data));

  return (
    <>
      <Box height="auto" width="80%" margin="auto" marginBottom="100px">
        <Accordion allowMultiple>
          {postList.map((post, index) => (
            <AccordionItem
              key={index}
              backgroundColor="grayColor"
              margin="15px"
              padding="25px"
              borderRadius="30px"
            >
              <Heading>
                <Text textAlign="center" fontSize="15px" marginBottom="10px">
                  {post.title.toUpperCase()}
                </Text>
                <Text textAlign="left" fontSize="13px" fontWeight="normal">
                  {post.body}
                </Text>
                <Text textAlign="right" fontSize="13px">
                  {state?.username}
                </Text>
                <AccordionButton
                  marginTop="10px"
                  borderRadius="20px"
                  borderWidth="2px"
                  borderColor="whiteColor"
                  inlineSize="max-content"
                >
                  <FaRegComments fontSize="15px" />
                  <Text marginLeft="10px" fontSize="13px">
                    Comments
                  </Text>
                </AccordionButton>
              </Heading>
              {commentsResult.data
                .filter((comment) => post.id === comment.postId)
                .map((comment, index) => (
                  <AccordionPanel
                    key={index}
                    backgroundColor="whiteColor"
                    borderRadius="20px"
                    marginTop="5px"
                  >
                    <Box display="flex">
                      <Box className="self-center">
                        <BiUserCircle fontSize="27px" />
                      </Box>
                      <Box>
                        <Text
                          fontSize="13px"
                          marginLeft="10px"
                          fontWeight="bold"
                          className="capitalize "
                        >
                          {comment.name}
                        </Text>

                        <Text fontSize="11px" marginLeft="10px">
                          {comment.email}
                        </Text>
                      </Box>
                    </Box>
                    <Text fontSize="12px" marginTop="10px">
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
