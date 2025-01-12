import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import UserTrainerIndividualData from "../../../Hooks/UserTrainerIndividualData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const DManageClasses = () => {
  const axiosSecure = useAxiosSecure();
  const [trainerIndividualData, isLoading, refetch] =
    UserTrainerIndividualData();
  console.log(trainerIndividualData.slots);
  console.log(trainerIndividualData.name);
  const [bookedData, setBookedData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal1 = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleView = (slotName, trainerData) => {
    const data = {
      name: slotName,
      trainerName: trainerData.name,
    };
    console.log(data);
    axiosSecure
      .post("/bookedEmail", data)
      .then((res) => {
        if (res.data) {
          setBookedData(res.data);
          toggleModal1();
        }
      })
      .catch((err) => console.log(err.data));
    refetch();
  };
  const handleDelete = (slotName, trainerData) => {
    const data = {
      name: slotName,
      trainerName: trainerData.name,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      axiosSecure
        .post("/sloteDelete", data)
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            // toggleModal1();
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          }
        })
        .catch((err) => console.log(err.data));
      refetch();
    });
  };

  return (
    <div>
        <Helmet>
        <title>Workout - Manage Classes</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : trainerIndividualData.slots.length === 0 ? (
        <div>
          <h2 className="text-4xl text-center h-full font-semibold mb-4 pt-20 text-white capitalize">
            no Session available
          </h2>
          <div className="text-center">
            <Link to={"/dashboard/addSession"}>
              <button className="px-4 py-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                add Session now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-[#007BFF] rounded-lg text-white">
              <tr>
                <th className="py-2 px-4 border-b">Slot Name</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Veiw</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {trainerIndividualData.slots.map((slot, i) => (
                <tr key={i} className="text-center">
                  <td className="py-2 px-4 border-b">{slot.name}</td>
                  <td className="py-2 px-4 border-b">{slot.time}</td>
                  <td className="">
                    <button
                      onClick={() =>
                        handleView(slot.name, trainerIndividualData)
                      }
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEye />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleDelete(slot.name, trainerIndividualData)
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                    <div className="p-4 text-center">
                      <h1>those who booked this slot</h1>
                      <ul className="list-disc list-inside ml-3">
                        {bookedData.length !== 0 ? (
                          bookedData.map((booked, index) => (
                            <li key={index} className="ml-2">
                              {booked.email}
                            </li>
                          ))
                        ) : (
                          <p>no one can book this slot </p>
                        )}
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

export default DManageClasses;
