import React from "react";
import useFetch from "../hooks/useFetch";
import {
  Button,
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Flex,
  Input,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { matchSorter } from "match-sorter";

const Product = () => {
  const { loading, data } = useFetch("https://fakestoreapi.com/products");
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  // Function to handle input change and update search suggestions
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue !== "") {
      const filteredSuggestions = matchSorter(data, inputValue, {
        keys: ["title"],
      }).map((item) => item.title.slice(14).toUpperCase());
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <Box>
      <Container maxW="7xl" bg="gray.50" p="4">
        <Flex gap="3" mb="3" flex="6">
          <Input
            flex="5"
            value={query}
            onChange={handleInputChange}
            list="suggestions-list"
            placeholder="Search for products"
            bg="#fff"
          />
          <datalist id="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <option key={index} value={suggestion} />
            ))}
          </datalist>
          <Button flex="1" colorScheme="brand">
            Search
          </Button>
        </Flex>
        {loading ? (
          <Box textAlign="center">
            <Heading>Loading...</Heading>
          </Box>
        ) : data.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
            {matchSorter(data, query, { keys: ["title"] }).map(
              (item, index) => {
                if (item.title.length > 0) {
                  return (
                    <Card maxW="sm" key={index}>
                      <CardBody>
                        <Center>
                          <Image
                            src={item.image}
                            alt={item.title}
                            borderRadius="lg"
                            boxSize={{ base: "150px", md: "200px" }}
                          />
                        </Center>
                        <Stack mt="6" spacing="3">
                          <Text fontWeight="bold">{item.title}</Text>
                          <Accordion allowToggle>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box
                                    as="span"
                                    fontSize="md"
                                    fontWeight="600"
                                    flex="1"
                                    textAlign="left"
                                  >
                                    DESCRIPTION
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                {item.description}
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Button
                          w="full"
                          variant="solid"
                          colorScheme="brand"
                          to={`/product/${item.id}`}
                          as={Link}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                } else {
                  return null;
                }
              }
            )}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" mt="4">
            <Heading>No Data</Heading>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Product;
