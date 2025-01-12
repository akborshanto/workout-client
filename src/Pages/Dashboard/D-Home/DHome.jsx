import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import useRole from "../../../Hooks/useRole";
import { IoMailOpen } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { VscGitStashApply } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import UseAplicationFiner from "../../../Hooks/UseAplicationFiner";
import { Helmet } from "react-helmet";
const DHome = () => {
  const [isAdmin, isTrainer] = useRole();
  console.log(isAdmin, isTrainer);
  const [applictionBecameTrainer] = UseAplicationFiner();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log(applictionBecameTrainer);
  return (
    <div className=" lg:pt-24 pt-20 bg-[#141414] ">
        <Helmet>
        <title>Workout - Dashboard</title>
      </Helmet>
      {" "}
      <div className="flex h-screen  relative border-t-2">
        <aside
          className={`absolute inset-y-0 left-0 z-10 border-r-2  w-64 overflow-y-auto transition duration-300 transform bg-[#141414]  dark:bg-gray-800 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:inset-0`}
        >
          <div className="flex items-center justify-center pt-8">
            <div className="text-xl flex  justify-between w-full px-10 font-semibold text-white">
              Dashboard{" "}
              <button
                className="text-gray-500 focus:outline-none md:hidden"
                onClick={toggleSidebar}
              >
                <ImCross className="text-white text-xl" />
              </button>
            </div>
          </div>
          <nav className="">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <CgProfile className="mr-2" /> Profile
            </NavLink>
            {isAdmin === false && isTrainer === false ? (
              <>
                {" "}
                <NavLink
                  to="/dashboard/activity"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <RxActivityLog className="mr-2" /> Activity log
                </NavLink>
                <NavLink
                  to="/dashboard/bookedTrainers"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <GiTeacher className="mr-2" /> Booked trainers
                </NavLink>
              </>
            ) : (
              ""
            )}
            {isAdmin ? (
              <>
                {" "}
                <NavLink
                  to="/dashboard/balance"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <MdAccountBalanceWallet className="mr-2" /> balance
                </NavLink>
                <NavLink
                  to="/dashboard/subscriber"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <IoMailOpen className="mr-2" /> subscribe
                </NavLink>
                <NavLink
                  to="/dashboard/allTrainers"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <FaChalkboardTeacher className="mr-2" /> All Trainers
                </NavLink>
                <NavLink
                  to="/dashboard/allAplication"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <VscGitStashApply className="mr-2" /> Applied Trainer
                </NavLink>
                <NavLink
                  to="/dashboard/addClasses"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <SiGoogleclassroom className="mr-2" /> Add new Class
                </NavLink>
              </>
            ) : isTrainer ? (
              <>
                {" "}
                <NavLink
                  to="/dashboard/manageClasses"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <SiGoogleclassroom className="mr-2" /> manage classes
                </NavLink>
                <NavLink
                  to="/dashboard/addSession"
                  className={({ isActive }) =>
                    `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                      isActive
                        ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                        : "md:text-white text-white"
                    } `
                  }
                >
                  <SiGoogleclassroom className="mr-2" /> Add Session
                </NavLink>
              </>
            ) : (
              ""
            )}
            {isAdmin || isTrainer ? (
              <NavLink
                to="/dashboard/addForum"
                className={({ isActive }) =>
                  `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                    isActive
                      ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                      : "md:text-white text-white"
                  } `
                }
              >
                <RxActivityLog className="mr-2" /> Add new Forum
              </NavLink>
            ) : (
              ""
            )}
          </nav>
        </aside>

        <div className="flex flex-col flex-1 w-full overflow-hidden ">
          <main className="flex-1 overflow-x-hidden overflow-y-auto  bg-[#141414]">
            <div className="container mx-auto px-6 py-8">
              <button
                className="text-gray-500 focus:outline-none md:hidden"
                onClick={toggleSidebar}
              >
                <FaBarsStaggered className="text-white text-xl" />
              </button>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DHome;
