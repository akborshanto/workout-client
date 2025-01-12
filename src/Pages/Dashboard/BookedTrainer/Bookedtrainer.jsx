import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPablic from "../../../Hooks/useAxiosPpablic";
import Loading from "../../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const Bookedtrainer = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPablic();
  console.log(user.email);
  const { data: bookedTrainer = [], isLoading } = useQuery({
    queryKey: ["bookedTrainer", user], // Pass query key as an object
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedTrainer/${user.email}`);
      return res.data;
    },
  });
  console.log(bookedTrainer);
  return (
    <div>
      <Helmet>
        <title>Workout - Booked trainers</title>
      </Helmet>
      <h2 className="text-4xl text-center font-semibold mb-4 text-white">
        Booked trainers
      </h2>
      {isLoading ? (
        <Loading />
      ) : bookedTrainer ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-[#007BFF] border-b  border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xl   text-white font-bold uppercase tracking-wider">
                  Trainer Name
                </th>
                <th className="px-6 py-3 text-left text-xl   text-white font-bold uppercase tracking-wider">
                  Class Name
                </th>
                <th className="px-6 py-3 text-left text-xl   text-white font-bold uppercase tracking-wider">
                  Slot Name
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookedTrainer.map((booking) => (
                <tr key={booking._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.trainerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.soltName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-2xl text-center font-semibold mb-4 text-white">
          You didn't booked any trainer yet
        </h2>
      )}
    </div>
  );
};

export default Bookedtrainer;
