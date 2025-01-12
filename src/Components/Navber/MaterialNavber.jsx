import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
const list = (
  <>
    {" "}
    <li>
      
    </li>
    <li>
      <NavLink
        to="/trainer"
        className={({ isActive }) =>
          `text-base font-bold text-white   uppercase ${
            isActive
              ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
              : "md:text-white"
          } `
        }
      >
        Trainer
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/classes"
        className={({ isActive }) =>
          `text-base font-bold text-white   uppercase ${
            isActive
              ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
              : "md:text-white"
          } `
        }
      >
        Classes
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `text-base font-bold text-white   uppercase ${
            isActive
              ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
              : "md:text-white"
          } `
        }
      >
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/community"
        className={({ isActive }) =>
          `text-base font-bold text-white   uppercase ${
            isActive
              ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
              : "md:text-white"
          } `
        }
      >
        Community
      </NavLink>
    </li>
  </>
);
function NavList() {
  return (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base font-bold text-white   uppercase ${
            isActive
              ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
              : "md:text-white"
          } `
        }
      >
        Home
      </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto container  px-6 py-3 overflow-hidden bg-transparent border-none">
      <div className="flex items-center justify-between bg-transparent w-full">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className=" cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
