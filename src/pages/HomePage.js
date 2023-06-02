import React from "react";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products?limit=5"
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading) return <div>Loading...</div>;
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="2xl" mb="2" textAlign="center">
          Welcome to Our E-commerce Store
        </Heading>
        {loading > 0 ? (
          <div>Loading...</div>
        ) : data.length > 0 ? (
          <Slider {...settings}>
            {data.map((product) => (
              <GridItem
                key={product.id}
                p={4}
                borderWidth={1}
                borderRadius="md"
                mx={2}
              >
                <Image src={product.image} alt={product.name} boxSize="150px" />
                <Heading as="h3" size="md" mt={4}>
                  {product.name}
                </Heading>
                <Text fontSize="lg" fontWeight="bold">
                  ${product.price}
                </Text>
              </GridItem>
            ))}
          </Slider>
        ) : (
          <div>No data found</div>
        )}
      </Container>
      <Flex
        as="footer"
        justifyContent="center"
        py={4}
        mt={8}
        borderTopWidth={1}
      >
        <Text>&copy; {new Date().getFullYear()} E-commerce Store</Text>
      </Flex>
    </Box>
  );
};

export default HomePage;
