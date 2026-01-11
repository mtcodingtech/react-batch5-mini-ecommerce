import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/prddsdsdsoducts/${id}`);
      return response.data;
    },
    // refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};
