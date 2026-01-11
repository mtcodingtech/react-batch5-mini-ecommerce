import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      return response.data;
    },
  });
};
