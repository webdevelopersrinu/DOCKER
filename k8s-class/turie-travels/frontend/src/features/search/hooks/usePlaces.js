import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../../hooks/useDebounce";
import { searchPlaces } from "../api/search.api";

export function usePlaces(query) {
  const debounced = useDebounce(query, 300);
  return useQuery({
    queryKey: ["places", debounced],
    queryFn: () => searchPlaces(debounced),
    enabled: debounced.trim().length > 0,
    staleTime: 60_000,
  });
}
