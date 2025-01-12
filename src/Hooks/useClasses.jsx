import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "./useAxiosPpablic";


const useClasses = () => {
  window.scrollTo(0, 0);
 const axiosPublic = useAxiosPablic()
  // State to track the current page

  // Fetch data using useQuery hook with query parameters for pagination
    const { data: classes = [], isLoading } = useQuery({
      queryKey: ['classes'], // Pass query key as an object
      queryFn: async () => {
        const res = await axiosPublic.get(`/classes`);
        return res.data;
      },
    });
  return [classes, isLoading];
};

export default useClasses;
