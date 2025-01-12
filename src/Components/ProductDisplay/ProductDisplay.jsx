import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  return (
    <div className="max-w-7xl m-auto md:px-10 px-5  ">
      <div className="relative py-10 w-full space-y-4 max-w-7xl m-auto px-5 md:px-10">
        <h1 className="lg:block hidden  uppercase text-7xl mt-0 absolute  left-0 outline-text-gym  bottom-0 ">
          Product
        </h1>
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
          Our latest <br /> <span className="text-[#007BFF]">Products</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
        <div className="border-[1px] border-gray-500/35 rounded-2xl p-3  shadow-md shadow-black group">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co.com/YX5n4Bh/shop-11-500x500.jpg"
              alt="Product"
              className="object-cover w-full h-full group-hover:scale-110 duration-200"
            />
          </div>
          <div className=" text-center space-y-2 mt-5 py-3">
            <h1 className="font-bold text-white">Smart Watches</h1>
            <p className="text-sm text-gray-600 md:block hidden" >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              aspernatur!
            </p>
            <p className="text-base space-y-2 font-bold">
              <span className="text-gray-300">
                <del>$49.00</del> {"  "}
              </span>
              <span className="text-[#007bff]">{"  "} $39.00</span>
            </p>
            <div>
              <button className=" md:text-base text-sm px-4 p-1 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-500/35 rounded-2xl p-3  shadow-md shadow-black group">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co.com/cvxd275/shop-12-500x500.jpg"
              alt="Product"
              className="object-cover w-full h-full group-hover:scale-110 duration-200"
            />
          </div>
          <div className=" text-center space-y-2 mt-5 py-3">
            <h1 className="font-bold text-white">Smart Watches</h1>
            <p className="text-sm text-gray-600 md:block hidden">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              aspernatur!
            </p>
            <p className="text-base space-y-2 font-bold">
              <span className="text-gray-300">
                <del>$49.00</del> {"  "}
              </span>
              <span className="text-[#007bff]">{"  "} $39.00</span>
            </p>
            <div>
              <button className=" md:text-base text-sm px-4 p-1 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-500/35 rounded-2xl p-3  shadow-md shadow-black group">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co.com/J2nK6vm/shop-13-500x500.jpg"
              alt="Product"
              className="object-cover w-full h-full group-hover:scale-110 duration-200"
            />
          </div>
          <div className=" text-center space-y-2 mt-5 py-3">
            <h1 className="font-bold text-white">Smart Watches</h1>
            <p className="text-sm text-gray-600 md:block hidden">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              aspernatur!
            </p>
            <p className="text-base space-y-2 font-bold">
              <span className="text-gray-300">
                <del>$49.00</del> {"  "}
              </span>
              <span className="text-[#007bff]">{"  "} $39.00</span>
            </p>
            <div>
              <button className=" md:text-base text-sm px-4 p-1 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-500/35 rounded-2xl p-3  shadow-md shadow-black group">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co.com/k4P13gN/shop-16-500x500.jpg"
              alt="Product"
              className="object-cover w-full h-full group-hover:scale-110 duration-200"
            />
          </div>
          <div className=" text-center space-y-2 mt-5 py-3">
            <h1 className="font-bold text-white">Smart Watches</h1>
            <p className="text-sm text-gray-600 md:block hidden">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
              aspernatur!
            </p>
            <p className="text-base space-y-2 font-bold">
              <span className="text-gray-300">
                <del>$49.00</del> {"  "}
              </span>
              <span className="text-[#007bff]">{"  "} $39.00</span>
            </p>
            <div>
              <button className=" md:text-base text-sm px-4 p-1 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-5">
        {" "}
        <Link className="" to={"/products"}>
          {" "}
          <button className=" flex items-center gap-2 px-4 p-2 mt-5 rounded-full border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
            View All Products <FaArrowAltCircleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDisplay;

// https://i.ibb.co.com/k4P13gN/shop-16-500x500.jpg
// https://i.ibb.co.com/J2nK6vm/shop-13-500x500.jpg
// https://i.ibb.co.com/cvxd275/shop-12-500x500.jpg
// https://i.ibb.co.com/YX5n4Bh/shop-11-500x500.jpg
