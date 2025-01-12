import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaSackDollar, FaUsers } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Helmet } from "react-helmet";

const DBlance = () => {
  const axiosSecure = useAxiosSecure();

  //   ;ast six transition data -----------------------------------
  const { data: lastTrans = [], isLoading } = useQuery({
    queryKey: ["lastTrans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lastPayment");
      return res.data;
    },
  });

  //   total user count ---------------------------------------
  const { data: userCount = [] } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userCount");
      return res.data;
    },
  });

  //   total newslatter user ---------------------------

  const { data: newsletterCount = [] } = useQuery({
    queryKey: ["newsletterCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/newsletter/count");
      return res.data;
    },
  });

  //   total revenew -----------------------------------------
  const { data: revenue = [] } = useQuery({
    queryKey: ["Revenue"],
    queryFn: async () => {
      const res = await axiosSecure.get("/totalPrice");
      return res.data;
    },
  });
  const data = [
    {
      name: "seb Vs users",
      Subscribers: newsletterCount.count,
      Users: userCount.count,
    },
  ];

  console.log(lastTrans);
  return (
    <div className="">
      <Helmet>
        <title>Workout - Balance</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="rounded-lg bg-white flex flex-col">
          <h1 className="bg-blue-600 w-full text-center rounded-t-lg py-2 text-xl text-white uppercase">
            Total Revenue
          </h1>
          <div className="h-full flex justify-between items-center p-5">
            <FaSackDollar className="text-5xl  box-content text-green-700" />
            <span className=" text-5xl font-bold">$ {revenue.revenue}</span>
          </div>
        </div>
        <div className="rounded-lg bg-white  flex flex-col">
          <h1 className="bg-blue-600 w-full text-center rounded-t-lg py-2 text-xl text-white uppercase">
            Users
          </h1>
          <div className="h-full flex justify-between items-center p-5">
            <FaUsers className="text-5xl  box-content text-blue-500" />
            <span className=" text-5xl font-bold"> {userCount.count}</span>
          </div>
        </div>
        <div className="rounded-lg bg-white flex flex-col">
          <h1 className="bg-blue-600 w-full text-center rounded-t-lg py-2 text-xl text-white uppercase">
            subscriber
          </h1>
          <div className="h-full flex justify-between items-center p-5">
            <FaMailBulk className="text-5xl  box-content text-rose-500" />
            <span className=" text-5xl font-bold">
              {" "}
              {newsletterCount.count}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="py-5 text-center lg:text-4xl md:text-2xl text-xl font-bold  text-white">
          User VS Subscriber Chart
        </div>
        <div className="w-full flex justify-center">
          <ResponsiveContainer width="80%" height={500}>
            <BarChart data={data} barSize={60}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Subscribers" fill="#F43F5E" />
              <Bar dataKey="Users" fill="#3F83F8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <div className="py-5 text-center lg:text-4xl md:text-2xl text-xl font-bold  text-white">
          Leatest Transactions
        </div>
        <div>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border rounded-lg">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Transaction ID</th>
                  </tr>
                </thead>
                <tbody>
                  {lastTrans.map((lastTran) => (
                    <tr key={lastTran._id}>
                      <td className="border px-4 text-center text-white py-2">
                        {lastTran.email}
                      </td>
                      <td className="border px-4 text-center text-white py-2">
                        {lastTran.date}
                      </td>
                      <td className="border px-4 text-center text-white py-2">
                        {lastTran.price}
                      </td>
                      <td className="border px-4 text-center text-white py-2">
                        {lastTran.transactionId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBlance;
