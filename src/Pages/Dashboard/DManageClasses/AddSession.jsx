import { useState } from "react";
import UserTrainerIndividualData from "../../../Hooks/UserTrainerIndividualData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Select from "react-select";
import Loading from "../../../Components/Loading/Loading";
import useAxiosPablic from "../../../Hooks/useAxiosPpablic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
const AddSession = () => {
  const axiosPublic = useAxiosPablic();
  const { data: classesName = [] } = useQuery({
    queryKey: ["classesName"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes/name");
      return res.data;
    },
  });
  const [selectedDays, setSelectedDays] = useState([]);
  const [slotName, setSlotName] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);

  const axiosSecure = useAxiosSecure();
  const [trainerIndividualData, isLoading] = UserTrainerIndividualData();
  console.log(trainerIndividualData);
  const email = trainerIndividualData.email;
  const handleSubmit = async (e) => {
    const specialties = selectedClasses.map((skill) => skill.value);
    const availableDays = selectedDays.map((day) => day.value);
    e.preventDefault();
    const slot = { name: slotName, time: slotTime };
    const newSlotData = {
      email,
      availableDays,
      slot,
      specialties,
    };
    console.log(newSlotData);
    try {
      const res = await axiosSecure.post("/addSlot", newSlotData);
      if (res.status === 200) {
        toast.success("Slot added successfully!");
        setSelectedDays([]);
        setSlotName("");
        setSlotTime("");
        setSelectedClasses([]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add slot!");
    }
  };

  const dayOptions = trainerIndividualData?.availableDays?.map((day) => ({
    value: day,
    label: day,
  }));

  return (
    <div>
        <Helmet>
        <title>Workout - Add slot</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-4xl mx-auto pb-20 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-4">Add New Slot</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                value={trainerIndividualData.name}
                readOnly
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                value={trainerIndividualData.email}
                readOnly
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Days
              </label>
              <Select
                isMulti
                value={selectedDays}
                defaultValue={selectedDays}
                onChange={setSelectedDays}
                required
                options={dayOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Slot Name
              </label>
              <input
                type="text"
                value={slotName}
                required
                onChange={(e) => setSlotName(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter slot name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Slot Time
              </label>
              <input
                type="text"
                value={slotTime}
                required
                onChange={(e) => setSlotTime(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter slot time (e.g., 11:00 AM - 12:00 pm)"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Classes
              </label>
              <Select
                isMulti
                value={selectedClasses}
                required
                onChange={setSelectedClasses}
                options={classesName}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Slot
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddSession;
