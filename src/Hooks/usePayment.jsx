import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPablic from "./useAxiosPpablic";
import { useQuery } from "@tanstack/react-query";


const usePayment = () => {
  const axiosPublic = useAxiosPablic();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!loading && user) {
      setEmail(user.email);
    }
  }, [user, loading]);

  const { data: paymentData = [], isLoading, refetch } = useQuery({
    queryKey: ["userPaymetData", email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booking/${email}`);
      return res.data;
    },
    enabled: !!email,
  });
  //   console.log(paymentData);
  return [paymentData,isLoading,refetch];
};

export default usePayment;
