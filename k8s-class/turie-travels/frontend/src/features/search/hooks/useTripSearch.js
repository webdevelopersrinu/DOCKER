import { useQuery } from "@tanstack/react-query";
import { searchTrips, getTripById } from "../api/search.api";

export function useTripSearch(mode, from, to) {
  return useQuery({
    queryKey: ["trips", mode, from, to],
    queryFn: () => searchTrips(mode, from, to),
    enabled: !!(mode && from && to),
  });
}

export function useTrip(id) {
  return useQuery({
    queryKey: ["trip", id],
    queryFn: () => getTripById(id),
    enabled: !!id,
  });
}
