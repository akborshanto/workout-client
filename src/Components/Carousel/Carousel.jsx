import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link } from "react-router-dom";
import Fade from "./SecondSlider";

const CarouselBanner = () => {
  return (
    <>
      <div className="relative h-[250px] md:h-96 lg:h-screen ">
        <div className="h-full   absolute w-full bg-black/30   z-30">
          <div className="h-full     flex items-center   ">
            <div className="my-auto    bg-opacity-50   text-center mx-auto">
              <div className="max-w-7xl m-auto w-full     space-y-5 lg:p-0 md:p-10 p-5">
                <h1 className="text-white text-center lg:text-7xl md:text-2xl text-2xl z-[10px]  ">
                  DISCOVER THE HIDDEN ALTER <br />{" "}
                  <span className="outline-text">EGO OF YOUR BODY</span>{" "}
                </h1>
                <div className="text-white lg:text-base text-sm m-auto text-center w-[60%] md:block hidden ">
                  {" "}
                  Welcome to workout, where the night is not just for sleep;
                  it's for sweat, strength, and self-discovery. Step into our
                  world of after-hours fitness, where the neon lights guide your
                  path to greatness.{" "}
                </div>
                <div>
                  <Link to={"/classes"}>
                    <button className=" md:text-base text-sm px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                      {" "}
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fade />
      </div>
    </>
  );
};

export default CarouselBanner;
