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

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        {data.title}
      </Heading>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Price: ${data.price}
      </Text>
      <Text fontSize="lg" mb={2}>
        Category: {data.category}
      </Text>
      <Text fontSize="lg" mb={4}>
        Description: {data.description}
      </Text>
      <Image src={data.image} alt={data.title} maxW="400px" mb={4} />
    </Box>
  );
};

export default SingleProduct;
