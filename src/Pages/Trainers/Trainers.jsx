import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { Helmet } from "react-helmet";
const Trainers = () => {
  window.scrollTo(0, 0);
  const axiosPublic = useAxiosPablic();
  const { data: trainers = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  console.log(trainers);
  return (
    <div className=" pt-10 md:pt-0  max-w-7xl md:px-10 px-2 pb-10 mx-auto ">
      <Helmet>
        <title>Workout - Trainers</title>
      </Helmet>
      <div className="container m-auto">
        <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4">
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            Meet our
            <span className="text-[#007BFF]"> trainers</span>.
          </h1>
        </div>

        {isLoading ? (
          <div className=" w-full flex items-center justify-center">
            {" "}
            <ReactLoading
              type={"spin"}
              color={"#007BFF"}
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-3 ">
            {trainers.map((trainer) => (
              <Link to={`/trainers/${trainer._id}`} className="cursor-default" key={trainer._id}>
                <div className="h-52  shadow-black border border-gray-400/15 shadow-sm p-2 group rounded-[15px] overflow-hidden">
                  <div className="h-full flex gap-3">
                    <Link
                      to={`/trainers/${trainer._id}`}
                      className="overflow-hidden h-full w-[200px] rounded-[10px]"
                    >
                      <img
                        src={trainer.images}
                        alt={trainer.name}
                        className="h-full w-full group-hover:scale-110 duration-500 object-cover object-top cursor-pointer"
                      />
                    </Link>
                    <div className="text-white flex-1 md:space-y-2 space-y-1">
                      <div className="flex justify-between w-full relative">
                        <h2 className="text-2xl">{trainer.name}</h2>
                        <div className="absolute right-0 ">
                          <p className="bg-yellow-500/5 border border-gray-700/15 text-xs font-bold   px-2 py-1 rounded-full">
                            Ex- {trainer.experienceYears}+ Year
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="capitalize font-bold text-sm text-gray-300">
                          expertise :
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {trainer.specialties
                            .slice(0, 3)
                            .map((specialty, index) => (
                              <p
                                key={index}
                                className="md:text-sm text-[8px] font-bold bg-white text-gray-600 px-2 mt-1 rounded-full border border-gray-500/15 "
                              >
                                {specialty}
                              </p>
                            ))}
                        </div>
                      </div>
                      {trainer.slots.length !== 0 ? (
                        <div>
                          <p className="capitalize font-bold text-sm text-gray-300">
                            Available slots :-
                          </p>
                          <div className="flex flex-col flex-wrap gap-[2px]">
                            {trainer.slots.slice(0, 3).map((slot, index) => (
                              <Link
                                to={`/trainerbooking?id=${trainer._id}&slot=${slot.name}`}
                                key={index}
                                className="md:text-xs text-[10px]   cursor-pointer  border bg-[#007BFF]/30 font-bold   hover:bg-transparent hover:text-[#007BFF] duration-500 text-white py-[2px] px-2 mt-1 rounded-full  border-gray-500/15 "
                              >
                                {slot.name} - {slot.time}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <p className="capitalize font-bold text-sm text-gray-300">
                            No slot available
                          </p>
                          <p className="capitalize  text-xs text-gray-300">
                            {trainer.quote}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trainers;
{
  /* <div
key={trainer._id}
className="bg-black  backdrop-blur-md duration-500 text-white rounded-lg p-2 border border-white space-y-4 flex flex-col"
>
<div className="h-[390px] w-full object-cover mb-4 rounded-lg m-auto">
  <img
    src={trainer.images}
    alt={trainer.name}
    className="h-full w-full object-cover object-top rounded-lg"
  />
</div>
<div className="p-4 flex-1">
  <h2 className="text-3xl font-bold text-white mb-2">
    {trainer.name}
  </h2>
  <p className="text-white text-2xl mb-2 font-bold">
    {trainer.experienceYears}+ years of experience
  </p>
  <p className="text-white mb-2">
    <span className="font-bold">Specialties:</span>
    <ul className="list-disc list-inside">
      {trainer.specialties.map((specialty, index) => (
        <li key={index} className="ml-2">
          {specialty}
        </li>
      ))}
    </ul>
  </p>
  <p className="text-white mb-2">
    <span className="font-bold">Available Slots:</span>
    <ul className="list-disc list-inside text-sm">
      {trainer.slots.map((slot, index) => (
        <li key={index} className="ml-2">
          {slot.name} - {slot.time}
        </li>
      ))}
    </ul>
  </p>
</div>
<div className="flex justify-between">
  <Link to={`/trainers/${trainer._id}`}>
    {" "}
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Book a Session
    </button>
  </Link>
  <div className=" flex text-xl gap-4 bg-white rounded-full items-center px-2">
    <FaFacebook className="text-blue-600" />
    <FaInstagram className="text-pink-600" />
    <FaTwitter className="text-blue-600" />
  </div>
</div>
</div> */
}
