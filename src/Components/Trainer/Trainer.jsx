import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Trainer = () => {
  const trainers = [
    {
      id: 1,
      name: "Matie Simms Junior",
      title: "CrossFit Coach",
      image:
        "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-1.jpg",
    },
    {
      id: 2,
      name: "Joshua Franklin",
      title: "Bodybuilding Coach",
      image:
        "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-3.jpg",
    },
    {
      id: 3,
      name: "Madison Froning",
      title: "Cardio & Conditioning",
      image:
        "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-team-img-2.jpg",
    },
  ];

  return (
    <div className="bg-[#141414] ">
      <div className=" pb-10 ">
        <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4 px-5">
          <h1 className="lg:block hidden  uppercase text-8xl -mt-10 absolute -rotate-90 -left-28 outline-text-gym top-1/2">
            EXPERT
          </h1>
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            TEAM OF <span className="text-[#007BFF]">EXPERT</span>
            <br /> Trainer
          </h1>
          <p className="text-center opacity-60 text-white md:text-base text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit <br />
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 p-5
         md:p-0 max-w-6xl m-auto pb-20  gap-5 container  "
        >
          {trainers.map((trainer) => (
            <div key={trainer.id} className="relative pr-20 group">
              <div className="relative image-list-item overflow-hidden">
                <img
                  src={trainer.image}
                  alt="Matie Simms Junior"
                  className="image object-cover w-full h-full"
                />
                <div className="absolute  flex-col top-0 left-0 w-full h-full bg-opacity-70 bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="text-white">
                      <FaTwitter className="text-3xl" />
                    </a>
                    <a href="#" className="text-white">
                      <FaInstagram className="text-3xl" />
                    </a>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
              <div className=" absolute top-1 right-12 p-4">
                <div className="rotate-90 absolute -left-24 top-[102px] headline1 w-64">
                  <p className="text-base text-white">{trainer.title}</p>
                  <p className="text-xl tracking-widest font-bold text-white">
                    {trainer.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center pb-14">
        {" "}
        <Link className="" to={"/trainers"}>
          {" "}
          <button className=" flex items-center gap-2 px-4 p-2 mt-5 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
            View All <FaArrowAltCircleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trainer;
