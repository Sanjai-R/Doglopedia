import { GridItem, Heading, Image, Text } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <GridItem p={4} borderWidth={1} borderRadius="md" mx={2}>
      <Image src={product.image} alt={product.name} boxSize="150px" />
      <Heading as="h3" size="md" mt={4}>
        {product.name}
      </Heading>
      <Text fontSize="md" fontWeight="bold">
        {product.title}
      </Text>
      <Text fontSize="lg" fontWeight="semi-bold" color="blue">
        ${product.price}
      </Text>
    </GridItem>
  );
};
export default ProductCard;
