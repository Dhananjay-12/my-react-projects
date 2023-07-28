import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
export function useBookings() {
  const {
    isLoading,
    data: bookings,
    isError,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { isLoading, bookings, isError };
}
