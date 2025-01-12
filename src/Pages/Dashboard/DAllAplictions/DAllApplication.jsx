import { useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const DAllApplication = () => {
  // const [rejectedId, setRejectedId] = useState("");

  const [modalData, setModalData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [seeDetails, setSeeDetails] = useState(null);
  const axiosSecure = useAxiosSecure();

  const { data: applicationBecameTrainers = [], refetch } = useQuery({
    queryKey: ["applictionsTrainer"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applictionBecameTrainer");
      return res.data;
    },
  });
  console.log(applicationBecameTrainers);

  // useEffect(() => {
  //   axiosSecure
  //     .get("/applictionBecameTrainer")
  //     .then((res) => {

  //     })
  //     .catch((err) => console.log(err));
  // }, [axiosSecure]);


  const toggleModal = (data) => {
    setModalData(data);
    setSeeDetails(!seeDetails);
  };
  const handleReject = (e) => {
    e.preventDefault();
    const massage = e.target.feedback.value;
    const statusdata = "rejected";

    const data = { ...modalData, massage, statusdata };
    console.log(data);
    axiosSecure
      .post("/applictionBecameTrainerUpdata", data)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          setIsOpen(!isOpen);
        }
      })
      .catch((err) => console.log(err));
  };
 

  const closeModal = () => {
    setIsOpen(false);
    setSeeDetails(false);
  };

  return (
    <div>
      <Helmet>
        <title>Workout - Applications</title>
      </Helmet>
      <h2 className="text-4xl text-center font-semibold mb-4 text-white">
        Applications
      </h2>
      {applicationBecameTrainers.length === 0 ? (
        <h2 className="text-4xl text-center h-full font-semibold mb-4 pt-20 text-white capitalize">
          no Applications available
        </h2>
      ) : (
        <div>
          {applicationBecameTrainers.map((applictionBecameTrainer) =>
            applictionBecameTrainer.status === "pandding" ? (
              <div
                key={applictionBecameTrainer._id}
                className="w-full bg-white mt-5 rounded-2xl px-6 py-5 flex lg:flex-row flex-col justify-between items-center relative"
              >
                <div className="flex gap-4 items-center lg:flex-row flex-col ">
                  <img
                    src={applictionBecameTrainer?.images}
                    alt=""
                    className="h-16 rounded-full"
                  />
                  <h1>{applictionBecameTrainer?.name}</h1>
                </div>
                <h1 className="text-base ">Applied for became a trainer</h1>
                <div>
                  <div className=" flex gap-3 items-center">
                    <button
                      onClick={() => toggleModal(applictionBecameTrainer)}
                      className="bg-[#1a1516d3] rounded-full px-5 text-white  py-2 capitalize"
                    >
                      <FaEye />
                    </button>
                    {/* <button
                      onClick={() => toggleModal1(applictionBecameTrainer)}
                      className="bg-[#d84c58d3] rounded-full px-5  py-2 capitalize"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApproveBtn(applictionBecameTrainer)}
                      className="bg-[#47da6cd3] rounded-full px-5  py-2 capitalize"
                    >
                      approve
                    </button> */}
                    <Link to={`/dashboard/applicationDetails/${applictionBecameTrainer._id}`}>
                      {" "}
                      <button className="bg-[#787e79d3] rounded-full px-5  py-2 capitalize">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
          {isOpen && (
            <div
              id="popup-modal"
              tabIndex="-1"
              className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div>
                    <div className="p-4 md:p-10 ">
                      <h1 className="">
                        <span className="font-bold">Name : </span>
                        {modalData.name}
                      </h1>
                      <h1 className="">
                        <span className="font-bold">Email : </span>
                        {modalData.email}
                      </h1>
                      <h1 className="font-bold">
                        {modalData.experienceYears}+ Year Experience
                      </h1>
                      <h1 className="font-bold">
                        <span className="font-bold">Quote : </span>
                        {modalData.quote}
                      </h1>
                      <div>
                        <span className="font-bold lg:mb-8 md:text-lg   lg:text-xl">
                          Specialties:
                        </span>
                        <ul className="list-disc list-inside ml-3">
                          {modalData.specialties.map((specialty, index) => (
                            <li key={index} className="ml-2">
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="">
                        <h1 className=" font-extrabold ">Available days :</h1>
                        <ul className=" list-disc flex flex-col font-bold  ml-7 ">
                          {modalData.availableDays.map(
                            (availableDay, index) => (
                              <li key={index} className="ml-2">
                                {availableDay}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                    <form onSubmit={handleReject} className="p-4 text-center">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="description"
                        >
                          Feedback
                        </label>
                        <textarea
                          required={true}
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="feedback"
                          placeholder="Enter description"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-rose-500 px-4 rounded-full py-2"
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          {seeDetails && (
            <div
              id="popup-modal"
              tabIndex="-1"
              className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4 md:p-10 ">
                    <h1 className="">
                      <span className="font-bold">Name : </span>
                      {modalData.name}
                    </h1>
                    <h1 className="">
                      <span className="font-bold">Email : </span>
                      {modalData.email}
                    </h1>
                    <h1 className="font-bold">
                      {modalData.experienceYears}+ Year Experience
                    </h1>
                    <h1 className="font-bold">
                      <span className="font-bold">Quote : </span>
                      {modalData.quote}
                    </h1>
                    <div>
                      <span className="font-bold lg:mb-8 md:text-lg   lg:text-xl">
                        Specialties:
                      </span>
                      <ul className="list-disc list-inside ml-3">
                        {modalData.specialties.map((specialty, index) => (
                          <li key={index} className="ml-2">
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <h1 className=" font-extrabold ">Available days :</h1>
                      <ul className=" list-disc  font-bold  ml-7 ">
                        {modalData.availableDays.map((availableDay, index) => (
                          <li key={index} className="ml-2">
                            {availableDay}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DAllApplication;
