import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true, // Set autoplay
    autoplaySpeed: 2000, // 2 seconds between slides
    pauseOnHover: false, // Ensure autoplay is not paused when hovered
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[250px] md:h-96 lg:h-screen relative bg-top -cover">
          <img
            src="https://i.ibb.co/qRdnCyp/background-image.png"
            alt="slide 1"
            className="h-full w-full object-cover object-top"
          />
          <h1 className="outline-text-gym lg:block hidden uppercase text-6xl absolute rotate-90 -right-20 top-1/2">
            workout
          </h1>
        </div>
        <div className="h-[250px] md:h-96 lg:h-screen relative bg-top -cover">
          <img
            src="https://i.ibb.co/gw55gCX/hero.jpg"
            alt="slide 2"
            className="h-full w-full object-cover object-top"
          />
          <h1 className="outline-text-gym lg:block hidden uppercase text-6xl absolute rotate-90 -right-20 top-1/2">
            workout
          </h1>
        </div>
        <div className="h-[250px] md:h-96 lg:h-screen relative bg-top -cover">
          <img
            src="https://i.ibb.co/bbHTGYd/footer-bg.jpg"
            alt="slide 3"
            className="h-full w-full object-cover object-top"
          />
          <h1 className="outline-text-gym lg:block hidden uppercase text-6xl absolute rotate-90 -right-20 top-1/2">
            workout
          </h1>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
