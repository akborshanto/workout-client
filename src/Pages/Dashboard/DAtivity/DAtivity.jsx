import { ImCross } from "react-icons/im";
import UseAplicationFiner from "../../../Hooks/UseAplicationFiner";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import useAxiosPablic from "../../../Hooks/useAxiosPpablic";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const DAtivity = () => {
  const axiosPublic = useAxiosPablic();
  const [applictionBecameTrainer, refetch] = UseAplicationFiner();
  console.log(applictionBecameTrainer);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handledelete = (id) => {
    console.log(id);
    axiosPublic
      .delete(`/applictionBecameTrainer/${id}`)
      .then((res) => {
        if (res) {
          refetch();
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mb-4 text-white">
        Activity log
      </h2>
      <Helmet>
        <title>Workout - Activity log</title>
      </Helmet>
      <div>
        {applictionBecameTrainer ? (
          <div>
            <div className="w-full bg-white rounded-2xl px-6 py-5 flex lg:flex-row flex-col justify-between items-center relative">
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
                {applictionBecameTrainer?.status === "pandding" ? (
                  <h1 className="bg-[#eeeb48d3] rounded-full px-5  py-2">
                    {applictionBecameTrainer?.status}
                  </h1>
                ) : (
                  <div className=" flex gap-3 items-center">
                    <h1 className="bg-[#d84c58d3] rounded-full px-5  py-2 capitalize">
                      {applictionBecameTrainer?.status}
                    </h1>
                    <button onClick={toggleModal}>
                      <div className=" bg-black text-white rounded-full p-1">
                        <FaEye />
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handledelete(applictionBecameTrainer._id)}
                className="absolute right-3 top-3 "
              >
                <ImCross />
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
                    <div className="p-4 md:p-10 text-center">
                      <h3 className="mb-5 text-lg font-normal text-black">
                        {applictionBecameTrainer?.massage}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <h2 className="text-2xl text-center font-semibold mb-4 text-white uppercase">
            you did not applied yet
          </h2>
        )}
      </div>
    </div>
  );
};

export default DAtivity;
