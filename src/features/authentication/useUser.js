import { useQuery } from "@tanstack/react-query";
import { getCurrnetUser } from "../../services/apiAuto";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrnetUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
