const FeaturedCard = ({ image, title, featureDes }) => {
  return (
    <div className="md:h-44 py-3 flex items-center justify-center px-4 text-center rounded-xl border-white border hover:bg-[#097fd9]  bg-black bg-opacity-10 backdrop-blur-md duration-500 text-white">
      <div>
        <div className="feature-card space-y-3">
          <div className=" ">
            <img src={image} className="h-14 m-auto " alt="" />
            <h3 className="md:w-full w-1/2 text-center mx-auto text-sm">{title}</h3>
          </div>
          <p className="md:block hidden text-sm">{featureDes}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
