import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPablic from "./useAxiosPpablic";

const UseAplicationFiner = () => {
  const { user, loading } = useAuth();

  const axiosPublic = useAxiosPablic();
  const { data: applictionBecameTrainer = [], refetch } = useQuery({
    queryKey: ["applictionBecame", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      if (user.email) {
        const res = await axiosPublic.get(
          `/applictionBecameTrainer/${user?.email}`
        );
        return res.data;
      }
    },
  });
  return [applictionBecameTrainer, refetch];
};

export default UseAplicationFiner;
