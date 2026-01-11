import { useCategoryStore } from "@/store/useCategoryStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useProductsByCategory = () => {
  const { selectedCategory } = useCategoryStore();
  return useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      const response = await axios.get(
        `${BASE_URL}/products/category/${selectedCategory}`
      );
      return response.data;
    },
    // refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5
  });
};
