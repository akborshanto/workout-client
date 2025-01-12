import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";

const MotivationBanner = () => {
  return (
    <div className=" mt-24  ">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://i.ibb.co/vdKk9wg/gym-about.jpg"
        bgImageAlt="gym background"
        className="object-cover"
      >
        <div className="md:space-y-10 space-y-5 max-w-7xl m-auto md:px-10 px-5 lg:py-20 py-10">
          <div>
            <p className="text-white md:tracking-[10px] tracking-[5px] text-[8px] lg:ml-2 font-bold capitalize">
              sports motivation
            </p>
            <h1 className="lg:text-7xl md:text-4xl text-3xl  text-white">
              Push yourself <br />
              beyond your limits
            </h1>
          </div>
          <p className="text-sm text-white">
            We will develop for you a unique nutrition program for weight loss <br />
            and positive tone of the whole body
          </p>
          <div>
            <Link to={"/classes"}>
              <button className=" md:text-base text-sm px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                {" "}
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MotivationBanner;
