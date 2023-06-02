import React, { createContext } from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const ProductContext = createContext();

const HomePage = () => {
  const { data, loading, } = useFetch(
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
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our E-commerce Store
        </Heading>
        {loading > 0 ? (
          <div>Loading...</div>
        ) : data.length > 0 ? (
          <ProductContext.Provider value={data}>
            <Slider {...settings}>
              {data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </ProductContext.Provider>
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
