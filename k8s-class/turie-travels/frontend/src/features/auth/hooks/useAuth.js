import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi, signup as signupApi } from "../api/auth.api";
import { useAuthStore } from "../../../store/authStore";

export function useAuth() {
  const { token, user, login: setSession, logout } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ token, user }) => {
      setSession(token, user);
      toast.success(`Welcome back, ${user.name}`);
    },
  });

  const signupMutation = useMutation({
    mutationFn: signupApi,
    onSuccess: ({ token, user }) => {
      setSession(token, user);
      toast.success(`Welcome, ${user.name}`);
    },
  });

  return {
    isAuthenticated: !!token,
    user,
    logout,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    signup: signupMutation.mutateAsync,
    isSigningUp: signupMutation.isPending,
  };
}
