import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import { Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/Context";

const UsersDataTable = () => {
  const { usersResult } = useContext(GlobalContext);

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      wrap: true,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      wrap: true,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.website,
      wrap: true,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company.name,
      wrap: true,
      sortable: true,
    },
    {
      name: "Posts",
      wrap: true,
      selector: (row) => (
        <Button
          display="contents"
          fontSize="13px"
          as={Link}
          to={`${row.id}/posts`}
          state={{
            userId: row.id,
            postId: row.id,
            username: row.username,
          }}
        >
          {row.username}'s Posts
        </Button>
      ),
    },
  ];

  const ExpandedComponent = ({ data, index }) => (
    <Box key={index} margin="10px" marginLeft="60px">
      <Box display="flex">
        <Text fontSize="13px" fontWeight="500" marginRight="10px">
          Phone:
        </Text>
        <Text fontSize="13px">{data.phone}</Text>
      </Box>
      <Box display="flex">
        <Text fontSize="13px" fontWeight="500" marginRight="10px">
          E-mail:
        </Text>
        <Text fontSize="13px">{data.email}</Text>
      </Box>
      <Box display="flex">
        <Text fontSize="13px" fontWeight="500" marginRight="10px">
          Adress:
        </Text>
        <Text fontSize="13px">
          {data.address.street}, {data.address.suite}, {data.address.city},{" "}
          {data.address.zipcode}
        </Text>
      </Box>
    </Box>
  );

  return (
    <>
      <Box width="85%" margin="75px" marginTop="50px">
        <DataTable
          columns={columns}
          data={usersResult.data}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </Box>
    </>
  );
};
export default UsersDataTable;
