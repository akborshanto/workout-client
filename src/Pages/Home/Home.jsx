import { Helmet } from "react-helmet-async";
import CarouselBanner from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Gallery/Gallery";
import Review from "../../Components/Reveiw/Review";
import Title from "../../Components/Title/Title";
import Trainer from "../../Components/Trainer/Trainer";
import Featured from "../../Components/Featured/Featured";
import FeaturedClasses from "../../Components/FeaturedClasses/FeaturedClasses";
import NewsletterForm from "../../Components/NewsletterForm/NewsletterForm";
import RecentForumPost from "../../Components/RecentForumPost/RecentForumPost";
import MotivationBanner from "../../Components/motivationBanner/MotivationBanner";
import Status from "../../Components/Status/Status";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import Fade from "../../Components/Carousel/SecondSlider";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-[#141414]">
      <Helmet>
        <title>Workout - Home</title>
      </Helmet>
      <CarouselBanner />
      {/* <Fade /> */}
      <Status />
      <Featured />
      <FeaturedClasses />
      <MotivationBanner />
      <Trainer />
      <ProductDisplay />
      <Title />
      <Gallery />
      <Review />
      <RecentForumPost />
      <NewsletterForm />
    </div>
  );
};

export default Home;
