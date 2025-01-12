import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const UserTrainerIndividualData = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    data: trainerIndividualData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["trainerIndividualData", user.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/trainerIndividualData/${user.email}`);
      return res.data;
    },
  });
  return [trainerIndividualData, isLoading, refetch];
};

export default UserTrainerIndividualData;
