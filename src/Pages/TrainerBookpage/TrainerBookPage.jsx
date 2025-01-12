import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading/Loading";

const TrainerBookPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedCardPrice, setSelectedCardPrice] = useState(0);
  const [selectedCardPackage, setSelectedCardPackage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const queryParams = new URLSearchParams(location.search);
  const trainerId = queryParams.get("id");
  const bookingSlot = queryParams.get("slot");

  // getting data from backend--------------------------------------
  const axiosPublic = useAxiosPablic();
  const { data: trainer = [], isLoading } = useQuery({
    queryKey: ["trainerForBooking", trainerId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers/${trainerId}`);
      return res.data;
    },
  });

  const datas = [
    {
      id: 1,
      name: "Basic Membership",
      price: 10,
      benefits: [
        "Access to gym facilities during regular operating hours.",
        "Access to locker rooms and showers.",
        "Use of cardio and strength training equipment",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      benefits: [
        "All benefits of the basic membership.",
        "Use of additional amenities like a sauna or steam room.",
        "Access to group fitness classes such as yoga, spinning, and Zumba.",
      ],
    },
    {
      name: "Premium Membership",
      price: 100,
      id: 3,
      benefits: [
        "All benefits of the standard membership.",
        "Access to personal training sessions with certified trainers.",
        "Discounts on additional services such as massage therapy or nutrition counseling.",
      ],
    },
  ];

  const dataForBooking = {
    trainerName: trainer.name,
    slotName: bookingSlot,
    packageName: selectedCardPackage,
    price: selectedCardPrice,
    class : selectedClass,
    user,
  };
  const handleClick = (index, price, name) => {
    setSelectedCard(index === selectedCard ? null : index);
    setSelectedCardPrice(price);
    setSelectedCardPackage(name);
  };
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const book = () => {
    axiosPublic
      .post("/booking", dataForBooking)
      .then((res) => {
        if (res.data.acknowledged) {
          navigate("/payment");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen  bg-[#141414] pb-10">
          <Helmet>
        <title>Workout - Book A Trainer</title>
      </Helmet>
      {" "}
      <div className="relative pt-28 pb-10 w-full space-y-4">
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          trainer
          <span className="text-[#007BFF]"> Booking</span>
        </h1>
      </div>
      <div className=" bg-[#29272738] container m-auto p-5 rounded-lg">
        {isLoading ? (
          <Loading/>
        ) : (
          <div className="container mx-auto px-4 py-8 text-white">
            <h1 className="text-3xl font-bold mb-4">Trainer Info</h1>
            <div className=" rounded-lg p-6">
              <div className="mb-4 text-xl flex gap-5">
                <p className="font-semibold">Trainer name:</p>
                <p>{trainer.name}</p>
              </div>
              <div className="mb-4 text-xl flex gap-5">
                <p className="font-semibold">Selected slot:</p>
                <p>{bookingSlot}</p>
              </div>
              <div className="mb-4 flex gap-3 text-xl items-center bg-transparent">
                <p className="font-semibold">Classes :</p>
                <select
                  name=""
                  id=""
                  value={selectedClass}
                  onChange={handleClassChange}
                  className="bg-transparent border-white rounded-lg"
                >
                  <option value="selectOne">Select One</option>
                  {trainer.specialties.map((specialty) => (
                    <option
                      className="bg-transparent text-black"
                      key={specialty}
                      value={specialty}
                    >
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-3xl font-bold mb-4 text-white">
          Select one package
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container m-auto gap-3 ">
          {datas.map((data, i) => (
            <div
              key={data.name}
              className={`w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow flex flex-col sm:p-8 ${
                selectedCard === i + 1 ? "bg-[#ffffff34]" : ""
              } duration-500`}
              onClick={() => handleClick(data.id, data.price, data.name)}
            >
              <h5 className="mb-4 text-2xl font-bold text-white">
                {data.name}
              </h5>

              <div className="flex-1 ">
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {data.price}
                  </span>
                  <span className="ms-1 text-xl font-normal text-gray-500">
                    /month
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7 ">
                  {data.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 ">
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-green-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="text-base font-normal leading-tight text-white">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={book}
            disabled={selectedCardPrice === 0 && selectedClass === ""}
            className={`${
              selectedCardPrice === 0 || selectedClass === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded`}
          >
          Join Now 
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerBookPage;
