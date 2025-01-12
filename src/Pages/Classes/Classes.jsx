import { useQuery } from "@tanstack/react-query";
// import BasicPagination from "../../Components/Try";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
// import useClasses from "../../Hooks/useClasses";
import ReactLoading from "react-loading";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  //  claculate to total pages
  const { data: totalclasses = 0 } = useQuery({
    queryKey: ["totalclasses"], // Pass query key as an object
    queryFn: async () => {
      const res = await axiosPublic.get(`classes/count`);
      return res.data;
    },
  });
  const totalPages = Math.ceil(totalclasses.result / 9);
  //  fetch data from backend
  const axiosPublic = useAxiosPablic();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["paginationClasses", page, searchQuery],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/classes?page=${page}&search=${searchQuery}`
      );
      return res.data;
    },
  });
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  window.scrollTo(0, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };
  console.log(classes);
  return (
    <div className="min-h-screen  bg-[#141414]">
      <Helmet>
        <title>Workout - Classes</title>
      </Helmet>
      <div className="relative pt-28 pb-10 w-full space-y-4">
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          Our
          <span className="text-[#007BFF]"> Classes</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#007BFF] hover:bg-[#007BFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {isLoading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          {" "}
          <ReactLoading
            type={"spin"}
            color={"#007BFF"}
            height={50}
            width={50}
          />
        </div>
      ) : (
        <div className="max-w-7xl md:px-10 px-3  m-auto mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 md:p-0 p-3">
            {classes.map((classItem) => (
              <div key={classItem._id}>
                <div
                  className="h-52 bg-cover bg-center rounded-lg hover:-translate-y-[5px]   duration-500"
                  style={{ backgroundImage: `url(${classItem.image})` }}
                >
                  <div className="flex flex-col relative group justify-end h-full text-white bg-gray-800/15 p-4">
                    <h1 className="text-3xl  group-hover:text-4xl duration-500">
                      {classItem.name}
                    </h1>
                    <div className="absolute top-0 bg-black bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-b-xl">
                      <div>
                        <img
                          src="https://i.ibb.co.com/ypVCycY/favorite.png"
                          alt=""
                          className="h-7 w-7"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold">
                          {classItem.bookings}
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute text-xs right-2 top-2 bg-black text-white
                 rounded-md px-3 py-2 text-center"
                    >
                      {
                        <div className="w-full h-full">
                          {classItem.trainers.length > 0 ? (
                            <div className="dropdown dropdown-end">
                              <div
                                tabIndex={0}
                                role="button"
                                className="w-full h-full"
                              >
                                Choose a trainer
                              </div>
                              <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-black bg-opacity-30 backdrop-blur-sm w-32 rounded-box z-[1]  p-2 shadow"
                              >
                                {classItem.trainers
                                  .slice(0, 3)
                                  .map((trainer) => (
                                    <li
                                      key={trainer._id}
                                      className="h-full w-full space-y-1 hover:bg-white/5 rounded-lg duration-500"
                                    >
                                      <Link
                                        to={`/trainers/${trainer._id}`}
                                        className="cursor-pointer flex items-center gap-2 h-full w-full  "
                                      >
                                        <img
                                          src={trainer.image}
                                          alt={trainer.name}
                                          className="h-7 w-7 rounded-full border-2 object-cover object-top"
                                        />
                                        <p className="text-xs">
                                          {trainer.name}
                                        </p>
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ) : (
                            "No trainer available"
                          )}
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {classes.length === 9 && (
            <div className="w-full flex justify-center py-10">
              <Stack spacing={2}>
                <Pagination
                  color="primary"
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "white", // Change the text color to white
                    },
                  }}
                />
              </Stack>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Classes;
