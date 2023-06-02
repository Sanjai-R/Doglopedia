import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box p={4} maxW="600px" mx="auto" bg="white" >
      <Heading as="h1" size="xl" mb={4}>
        {data.title}
      </Heading>

      <Box display="flex" alignItems="center" mb={4}>
        <Image src={data.image} alt={data.title} boxSize="200px" mr={4} />

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Price: ${data.price}
          </Text>
          <Text fontSize="md" fontWeight="medium" mb={2}>
            Category: {data.category}
          </Text>
        </Box>
      </Box>

      <Text fontSize="md">{data.description}</Text>
    </Box>
  );
};

export default SingleProduct;
