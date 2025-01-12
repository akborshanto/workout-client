import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import { Helmet } from "react-helmet";


const Newsletter = () => {
  const axiosSecure = useAxiosSecure();
  const { data: newsletters = [], isLoading } = useQuery({
    queryKey: ["newsletters"],
    queryFn: async () => {
      const res = await axiosSecure.get("/newsletter");
      return res.data;
    },
  });
  console.log(newsletters);

  return (
    <div>
      <div className="overflow-x-auto">
      <Helmet>
        <title>Workout - Newsletters </title>
      </Helmet>
        <table className="min-w-full bg-[#007BFF] rounded-lg text-white">
          <thead>
            <tr className="">
              <th className="  py-2 px-4 border-b border-gray-200 text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loading />
            ) : (
              newsletters.map((newsletter) => (
                <tr key={newsletter._id} className="bg-[#141414]">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {newsletter.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {newsletter.email}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    
    </div>
  );
};

export default Newsletter;
