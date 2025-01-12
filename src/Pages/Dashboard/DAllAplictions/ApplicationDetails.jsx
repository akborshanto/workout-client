import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import toast from "react-hot-toast";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ApplicationDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal1 = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();
  const handleReject = (e) => {
    e.preventDefault();
    const massage = e.target.feedback.value;
    const statusdata = "rejected";

    const data = { ...trainerData, massage, statusdata };
    console.log(data);
    axiosSecure
      .post("/applictionBecameTrainerUpdata", data)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Trainer Rejected");
          navigate("/dashboard");
          setIsOpen(!isOpen);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleApproveBtn = (details) => {
    const statusdata = "approved";
    const data = { ...details, statusdata };
    console.log(data);
    axiosSecure
      .post("/applictionBecameTrainerUpdata", data)
      .then((res) => {
        if (res.data.result1.insertedId) {
          toast.success("Trainer Approved");
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  const { data: trainerData = [], isError } = useQuery({
    queryKey: ["applicatonData", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/trainerData/${id}`);
      return res.data;
    },
  });

  // useEffect(() => {
  //   axiosSecure
  //     .get(`/trainerData/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [axiosSecure, id]);

  console.log(trainerData);
  return (
    <div>
        <Helmet>
        <title>Workout - Application data</title>
      </Helmet>
      {isError ? (
        <Loading />
      ) : (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center mt-3 items-center px-10">
            <img
              className="h-64 object-cover mr-5"
              src={trainerData?.images}
              alt={`${trainerData?.name || "Trainer"}'s profile`}
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{trainerData?.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {trainerData?.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Years of Experience:</strong>{" "}
                {trainerData?.experienceYears}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Quote:</strong> {trainerData?.quote}
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-evenly">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Available Days:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                  {trainerData?.availableDays?.length > 0 ? (
                    trainerData.availableDays.map((day, index) => (
                      <li key={index}>{day}</li>
                    ))
                  ) : (
                    <li>No available days</li>
                  )}
                </ul>
              </div>

              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Specialties:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                  {trainerData?.specialties?.length > 0 ? (
                    trainerData.specialties.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))
                  ) : (
                    <li>No specialties</li>
                  )}
                </ul>
              </div>

              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Slots:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                  {trainerData?.slots?.length > 0 ? (
                    trainerData.slots.map((slot, index) => (
                      <li key={index}>{slot}</li>
                    ))
                  ) : (
                    <li>No slots available</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={toggleModal1}
                className="bg-[#d84c58d3] rounded-full px-5 py-2 capitalize"
              >
                Reject
              </button>
              <button
                onClick={() => handleApproveBtn(trainerData)}
                className="bg-[#47da6cd3] rounded-full px-5 py-2 capitalize"
              >
                Approve
              </button>
            </div>
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
                      <form onSubmit={(e)=>handleReject(e)} className="p-4 text-center">
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
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationDetails;
