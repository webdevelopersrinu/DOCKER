import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getProfile, updateProfile, addPassenger } from "../api/profile.api";

export function useProfile() {
  return useQuery({ queryKey: ["profile"], queryFn: getProfile });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Preferences updated");
    },
  });
}

export function useAddSavedPassenger() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPassenger,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Passenger added");
    },
  });
}
