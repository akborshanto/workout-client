import { useState } from "react";
import Select from "react-select";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAplicationFiner from "../../Hooks/UseAplicationFiner";

const BeTrainerForm = () => {
  const navigate = useNavigate()
  const [applictionBecameTrainer ] =UseAplicationFiner()
  if(applictionBecameTrainer){
    navigate("/")
  }
  const [skills, setSkills] = useState([]);
  const [Days, setAvailableDays] = useState([]);

  const axiosPublic = useAxiosPablic();
  const { data: classesName = [] } = useQuery({
    queryKey: ["classesName"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes/name");
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user?.email;
    const name = user.displayName;
    const images = user.photoURL;
    const specialties = skills.map((skill) => skill.value);
    const experienceYears = e.target.experienceYears.value;
    const quote = e.target.des.value;
    const slots = [];
    const experience = "";
    const status = "pandding";
    const availableDays = Days.map((day) => day.value);
    const data = {
      name,
      email,
      images,
      specialties,
      experienceYears,
      availableDays,
      quote,
      slots,
      experience,
      status,
    };
    axiosPublic
      .post("/applictionBecameTrainer", data)
      .then((res) =>{
        if(res){
          navigate("/dashboard")
          toast.success("Application added")
        }
      })
      .catch((err) => console.log(err.data));
  };
  const { user, loading } = useAuth();

  const options = [
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
  ];

  return (
    <div className=" bg-[#141414]">
      <div className="max-w-3xl mx-auto  p-8 rounded-md  ">
        <Helmet>
          <title>Workout - Book A Trainer</title>
        </Helmet>{" "}
        <div className="relative md:pt-28 pt-10 pb-10 w-full space-y-4">
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            trainer
            <span className="text-[#007BFF]"> Booking</span>
          </h1>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full flex justify-between text-white">
            <div>
              <h1 className="uppercase text-3xl font-bold ">
                {user.displayName}
              </h1>
              <p className=" text-xl font-bold ">{user.email}</p>
            </div>
            <div className="rounded-full  p-1">
              <img
                src={user.photoURL}
                className=" h-16 w-16 ring-2 rounded-full"
                alt=""
              />
            </div>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6 gap-4">
            <div className="md:w-1/2">
              <label className="block mb-2 text-lg font-semibold text-white">
                Experience Years
              </label>
              <input
                required={true}
                type="text"
                name="experienceYears"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div className="md:w-1/2">
              <label className="block mb-2 text-lg font-semibold text-white">
                Skills
              </label>
              <Select
                required={true}
                options={classesName}
                isMulti
                onChange={setSkills}
                className="focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 gap-4">
            <div className="md:w-1/2">
              <label className="block mb-2 text-lg font-semibold text-white">
                Available Time in a Day
              </label>
              <input
                required={true}
                type="number"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div className="md:w-1/2">
              <label className="block mb-2 text-lg font-semibold text-white">
                Available Days a Week
              </label>
              <Select
                options={options}
                isMulti
                onChange={setAvailableDays}
                className="focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold text-white">
              Additional Information
            </label>
            <textarea
              required={true}
              name="des"
              // value={additionalInfo}
              // onChange={(e) => setAdditionalInfo(e.target.value)}
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Tell me about self "
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeTrainerForm;
