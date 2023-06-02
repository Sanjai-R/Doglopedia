import { BASE_URL } from "../utils/constant";

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  console.log(response);
};
