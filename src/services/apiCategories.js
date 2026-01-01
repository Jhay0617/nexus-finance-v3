import { useQuery } from "@tanstack/react-query";
import { useFetchData } from "../hooks/useFetchData";

export const useCategoriesData = () => {
  const fetchData = useFetchData();
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchData("categories"),
  });

  return { data, isLoading, error };
};
