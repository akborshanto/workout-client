import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const features = [
    {
      image: "https://i.ibb.co/6NdDpWb/fitness.png",
      title: "Personalized Workouts",
      description:
        "Get tailored workout plans designed specifically for your fitness goals and preferences.",
    },
    {
      image: "https://i.ibb.co/HKTtHbL/dumbbell.png",
      title: "Heart Rate Monitoring",
      description:
        "Track your heart rate in real-time during workouts to optimize your performance and health.",
    },
    {
      image: "https://i.ibb.co/hF2dhM4/empowerment.png",
      title: "Community Support",
      description:
        "Join a supportive community of fellow fitness enthusiasts for motivation and accountability.",
    },
    {
      image: "https://i.ibb.co/2n1smn6/running.png",
      title: "Progress Tracking",
      description:
        "Monitor your progress over time with detailed insights and performance analytics.",
    },
    {
      image: "https://i.ibb.co/mh7VjZC/fitness-tracker.png",
      title: "Flexible Scheduling",
      description:
        "Book classes and training sessions at your convenience with our flexible scheduling system.",
    },
    {
      image: "https://i.ibb.co/jV3Bx9t/trainer.png",
      title: "Expert Trainers",
      description:
        "Train with certified fitness professionals who are dedicated to helping you reach your goals.",
    },
  ];

  return (
    <div className="max-w-7xl m-auto md:px-10 px-5 ">
      <div className="relative  md:py-16 py-10 w-full space-y-4 max-w-7xl m-auto px-5">
        <h1 className="lg:block hidden  uppercase text-7xl mt-0  absolute -left-0 outline-text-gym bottom-0 opacity-60">
          Features
        </h1>
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          Explore Our <br /> Top{" "}
          <span className="text-[#007BFF]">Features</span>
        </h1>
        <p className="text-center opacity-60 text-white text-sm md:px-20">
          Discover the exceptional features that make our gym stand out. Each
          card below highlights a key aspect of our services designed to enhance
          your fitness journey.
        </p>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1  gap-5 mt-10 md:h-[480px] ">
        <div className=" md:col-span-2 row-span-2  h-full ">
          <div
            className="bg-cover bg-top md:p-10 p-5 rounded-3xl md:h-full h-44 "
            style={{
              backgroundImage: "url(https://i.ibb.co/CbmgPNs/banner-01.jpg)",
            }}
          >
            <div className="flex flex-col justify-end h-full">
              <div>
                <p
                  className="text-white uppercase text-sm"
                  style={{ letterSpacing: "7px" }}
                >
                  boxing classes
                </p>
                <h1 className="md:text-4xl text-2xl text-white font-bold">
                  Studio of <br />
                  Martial Arts
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl md:col-span-2 h-full">
          {" "}
          <div
            className="bg-cover  bg-top  p-5 rounded-3xl md:h-full h-44 "
            style={{
              backgroundImage: "url(https://i.ibb.co/DY2xJCJ/banner-02.jpg)",
            }}
          >
            <div className="flex justify-center h-full flex-col text-black space-y-3">
              <p
                className=" uppercase text-[7px]"
                style={{ letterSpacing: "7px" }}
              >
               special deal

              </p>
              <h1 className="text-xl  font-bold">
              Intensive Body Evolution <br />
              for the Summer
              </h1>
             <div>
             <button className="bg-black text-xs px-4 py-2 text-white rounded-full">Get Now</button>
             </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl col-span-1">
          {" "}
          <div
            className="bg-cover bg-top  p-5 rounded-3xl  md:h-full h-44 "
            style={{
              backgroundImage: "url(https://i.ibb.co/ZLsr9cK/banner-03.jpg)",
            }}
          >
            <div className="h-full flex flex-col justify-end">
              <p
                className="text-white uppercase text-[7px]"
                style={{ letterSpacing: "7px" }}
              >
                for runners
              </p>
              <h1 className="text-base text-white font-bold">
              Outdoor <br />
              Races and Marathons
              </h1>
            </div>
          </div>
        </div>
        <div className="rounded-3xl col-span-1">
          {" "}
          <div
            className="bg-cover bg-top  p-5 rounded-3xl md:h-full h-44 "
            style={{
              backgroundImage: "url(https://i.ibb.co/pvcTwyw/banner-04.jpg)",
            }}
          >
            <div className="h-full flex flex-col justify-end">
              <p
                className="text-white uppercase text-[7px]"
                style={{ letterSpacing: "7px" }}
              >
                iron and strong
              </p>
              <h1 className="text-base text-white font-bold">
              Ripped Press <br />
              in Just 2 Months
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// https://i.ibb.co/pvcTwyw/banner-04.jpg
// https://i.ibb.co/ZLsr9cK/banner-03.jpg
// https://i.ibb.co/CbmgPNs/banner-01.jpg
// https://i.ibb.co/DY2xJCJ/banner-02.jpg
// https://i.ibb.co/vdKk9wg/gym-about.jpg

export default Featured;
