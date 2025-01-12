import CountUp from "react-countup";
import img from "/img.svg";
const Status = () => {
  return (
    <div>
      <section className="py-5  ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="overflow-hidden  bg-white/5 border border-gray-200/5  shadow-xl rounded-lg bg-cover bg-no-repeat"
            >
              <div className="px-4 py-6 ">
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co.com/k6N0yWb/classroom.png"
                    className="h-12 w-12"
                    alt=""
                  />
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-[#007BFF]">
                      {" "}
                      <CountUp start={0} end={40} duration={7} />+
                    </h4>
                    <p className="mt-1.5 text-sm  leading-tight font-bold uppercase text-white">
                      Classes Offered
                    </p>
                    <p className="text-gray-400 text-xs">
                      Track your fitness journey with our ever-growing list of
                      classes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="overflow-hidden  bg-white/5 border border-gray-200/5  shadow-xl rounded-lg bg-cover bg-no-repeat"
            >
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co.com/y4wk7vb/delivery.png"
                    className="h-12 w-12"
                    alt=""
                  />
                  <div className="ml-4">
                    <h4 className="text-4xl font-extrabold text-[#007BFF] ">
                      <CountUp start={0} end={210} duration={7} />+
                    </h4>
                    <p className="mt-1.5 text-sm  leading-tight font-bold uppercase text-white">
                      Products Available
                    </p>
                    <p className="text-gray-400 text-xs">
                      Explore a variety of premium workout gear tailored just
                      for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="overflow-hidden  bg-white/5 border border-gray-200/5  shadow-xl rounded-lg bg-cover bg-no-repeat"
            >
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co.com/XX0RnmG/man.png"
                    className="h-12 w-12"
                    alt=""
                  />
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-[#007BFF]">
                      {" "}
                      <CountUp start={0} end={60} duration={7} />+
                    </h4>
                    <p className="mt-1.5 text-sm  leading-tight font-bold uppercase text-white">
                      Active Users
                    </p>
                    <p className="text-gray-400 text-xs">
                      Join our vibrant community of fitness enthusiasts!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="overflow-hidden  bg-white/5 border border-gray-200/5  shadow-xl rounded-lg bg-cover bg-no-repeat"
            >
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co.com/52B7MzK/trainer.png "
                    className="h-12 w-12"
                    alt=""
                  />
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-[#007BFF]">
                      {" "}
                      <CountUp start={0} end={9} duration={7} />+
                    </h4>
                    <p className="mt-1.5 text-base  leading-tight font-bold uppercase text-white">
                      Certified Trainers
                    </p>
                    <p className="text-gray-400 text-xs">
                      Get personalized guidance from our team of expert
                      trainers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;
