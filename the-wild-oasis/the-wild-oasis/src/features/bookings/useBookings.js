import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  //FILTER
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //SORT

  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isLoading,
    data: { data: bookings = [], count = 0 } = {},
    isError,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, isError, count };
}
