import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Glide from "@glidejs/glide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper modules
import { useEffect } from "react";

const Review = () => {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 4000,
      autoplay: 4500,
      // autoplay: true,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  const reviews = [
    {
      title: "Gym coach",
      image:
        "https://i.ibb.co.com/Fnt5zdk/c3ac7682e52df2e10d0a36ec3f243a44.jpg",
      name: "Elijah Shelton",
      review:
        "Elijah has been an amazing coach, helping me to achieve my fitness goals with personalized training plans and constant motivation.",
    },
    {
      title: "Yoga Instructor",
      image:
        "https://www.theptdc.com/wp-content/uploads/2019/01/Profile_Feature.png",
      name: "Ava Brooks",
      review:
        "Ava's yoga sessions are the perfect blend of physical challenge and mental relaxation. Her expertise and calm demeanor make every class enjoyable.",
    },
    {
      title: "Nutritionist",
      image:
        "https://lh5.googleusercontent.com/proxy/-h6uM_YNCpPy-HE9xJE07UK92urJiUUqFY7TqNx7sS6oVtV_J_aCBUdu1y3B1TfKzMJlSYzel7E7sTfp0kGZHrnwsbA1OFSa6HOWtf9D5nwdASb0f_AG_ob9FVObdG_h7fQA03w",
      name: "Liam Johnson",
      review:
        "Liam provided me with a detailed and sustainable nutrition plan that has significantly improved my health and energy levels.",
    },
    {
      title: "Personal Trainer",
      image:
        "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/testimonials-img-2.jpg",
      name: "Olivia Smith",
      review:
        "Olivia's personal training sessions are incredibly effective. She tailors workouts to my needs and pushes me to reach new heights.",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl md:px-10 px-5  text-center m-auto mt-10 md:mt-28 md:mb-20 mb-10 relative">
        <h1 className="lg:block hidden  uppercase text-9xl mt-0 absolute -rotate-90 -right-60 outline-text-gym top-36">
          REVIEWS
        </h1>
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white">
            <span className="text-[#007BFF]">REVIEWS</span> FROM <br />
            OUR CLIENT
          </h1>
        </div>
        {/* <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={() => ""}
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.name}
              className="md:p-20 py-10 px-5 space-y-6"
            >
              <div className="flex justify-center">
                <img
                  src={review.image}
                  className="avatar rounded-full h-20 w-20 object-cover object-center"
                  
                  alt={review.name}
                />
              </div>
              <div className="text-white">
                <p>{review.title}</p>
                <h1>{review.name}</h1>
              </div>
              <div className=" text-white  md:text-base text-sm font-thin ">
                {review.review}
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="glide-08 relative w-full mt-10">
          {/*    <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
              {reviews.map((review, index) => (
                <li key={index}>
                  <div className="h-full w-full">
                    <div className="h-full overflow-hidden   text-slate-500 shadow-xl shadow-black rounded-3xl border-white/15 border">
                      <div className="relative p-6">
                        <figure className="relative  z-10">
                          <blockquote className="p-6 text-lg leading-relaxed text-white">
                            <p>
                             {review.review}
                            </p>
                          </blockquote>
                          <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-[#007bff]">
                            <div className="flex items-center gap-4 pt-4 text-sm  text-[rgb(0,123,255)]">
                              <img
                                src={review.image}
                                alt="user name"
                                title="user name"
                              
                                className="object-cover h-14 w-14  shrink-0 rounded-full"
                              />
                              <div className="flex flex-col gap-1 text-left">
                                <span className="font-bold uppercase ">
                                  {review.name}
                                </span>
                                <cite className="not-italic text-gray-600 text-left">
                                  <a href="http://www.microsoft.com">
                                   {review.title}
                                  </a>
                                </cite>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                        <svg
                          aria-hidden="true"
                          className="absolute left-6 top-6 z-0 h-16"
                          viewBox="0 0 17 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                            className="fill-[#007bff51]"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/*    <!-- Indicators --> */}
          <div
            className="-mt-6 flex w-full items-center justify-center gap-2"
            data-glide-el="controls[nav]"
          >
            <button
              className="group p-4"
              data-glide-dir="=0"
              aria-label="goto slide 1"
            >
              <span className="block h-2 w-2 rounded-full bg-[#007bff] opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=1"
              aria-label="goto slide 2"
            >
              <span className="block h-2 w-2 rounded-full bg-[#007bff] opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=2"
              aria-label="goto slide 3"
            >
              <span className="block h-2 w-2 rounded-full bg-[#007bff] opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=3"
              aria-label="goto slide 4"
            >
              <span className="block h-2 w-2 rounded-full bg-[#007bff] opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
