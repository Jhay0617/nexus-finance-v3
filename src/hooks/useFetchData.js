import { supabase } from "../services/supabase";

export function useFetchData() {
  const fetchData = async (table) => {
    const { data, error } = await supabase.from(table).select("*");

    if (error) throw new Error(error.message || "failed to fetch the data");

    return data;
  };

  return fetchData;
}
