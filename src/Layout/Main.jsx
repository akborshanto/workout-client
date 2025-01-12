import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
  return (
    <div className="scrollbar-webkit   scrollbar-thin">
      <Toaster position="top-center" reverseOrder={false} />
      <Navber />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
