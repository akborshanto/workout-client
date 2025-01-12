import { Link } from "react-router-dom";
import useClasses from "../../Hooks/useClasses";

const FeaturedClasses = () => {
  const [classes] = useClasses();
  const classesData = classes.slice(0, 6);
  console.log(classes);
  return (
    <div className="max-w-7xl px-5 md:px-10 m-auto lg:pt-20">
      <div className="relative  w-full space-y-4 mb-10 px-5 py-10 max-w-7xl m-auto">
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          Feature
          <span className="text-[#007BFF]"> classes</span>
        </h1>
        <p className="text-center opacity-60 text-white text-sm  ">
          Explore a diverse range of classes meticulously crafted to cater to
          every fitness goal and preference. From high-intensity workouts like
          HIIT and CrossFit, aimed at pushing your limits and maximizing calorie
          burn, to mindful practices like Yoga and Meditation.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-5 p-1">
        {classesData.map((classItem) => (
        
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
                    <p className="text-sm font-bold">{classItem.bookings}</p>
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
                            {classItem.trainers.slice(0, 3).map((trainer) => (
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
                                  <p className="text-xs">{trainer.name}</p>
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
    </div>
  );
};

export default FeaturedClasses;
