import React, { useState } from "react";
import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import { FetchPost } from "../utils/fetch";

const Posts = (id) => {
  const [posts, setPosts] = useState([]);
  <FetchPost />;

  console.log(
    posts.filter((value) => {
      if (value.userId === id) {
        return value;
      }
    })
  );
  //console.log(id);
  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        marginTop="50px"
        marginBottom="50px"
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
        <SimpleGrid marginTop="20px" templateColumns={"1fr 1fr"}>
          {posts
            .filter((value) => {
              if (value.userId === 2) {
                return value;
              }
            })
            .map((post, index) => (
              <>
                <Box
                  backgroundColor="whiteAlpha.600"
                  margin="10px"
                  padding="25px"
                  borderRadius="5%"
                  key={index}
                >
                  <Text textAlign="center" fontSize="18px">
                    {post.title}
                  </Text>
                  <Text textAlign="left" fontSize="18px">
                    {post.body}
                  </Text>
                  <Text textAlign="left" fontSize="18px">
                    {post.userId}
                  </Text>
                </Box>
              </>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Posts;
