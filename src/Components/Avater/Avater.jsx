import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { CiLogin } from "react-icons/ci";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Avater = () => {
  const { user, signOutUser, loading } = useAuth();

  // drop down open and close
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (!loading && user) {
      setPhoto(user.photoURL);
    }
  }, [user, loading]);

  // logout logic
  const handleLogoutBtn = () => {
    signOutUser();
    toast.success("Log out successful");
  };

  return (
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        {!loading ? (
          <img
            className="w-10 h-10 p-[1px]  rounded-full  ring-2 ring-[#007BFF] "
            src={photo}
            alt="Bordered avatar"
            onClick={toggleDropdown}
          />
        ) : (
          ""
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52  shadow"
      >
        <div className="w-full">
          <img
            className="w-14 h-14  rounded-full  m-auto ring-2 ring-[#007BFF] "
            src={photo}
            alt="Bordered avatar"
          />
          <p className="block cursor-default px-4 py-2  text-black text-center">
            {user.displayName}
          </p>
          <Link
            to="/dashboard"
            end
            className={`text-base text-black font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase `}
          >
            <CgProfile className="mr-2" /> Profile
          </Link>
        </div>
        <li></li>
        <li className="text-white bg-error rounded-lg">
          <a
            href="#"
            onClick={handleLogoutBtn}
            className="gap-3
               px-4 py-2   flex items-center"
          >
            <CiLogin className="text-xl " /> Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Avater;
