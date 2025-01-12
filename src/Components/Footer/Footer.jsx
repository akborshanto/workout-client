const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage:
            "url(https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/shop-simple-slider-2.jpg)",
        }}
        className="relative bg-blueGray-200 bg-cover bg-center  z-40"
      >
        <div className="h-full w-full bg-black bg-opacity-60  pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <div>
                  {" "}
                  <a className="h-full flex gap-2 items-center text-xl cursor-pointer">
                    <img
                      src="https://i.ibb.co/8bY004Y/2024-05-26-00-05-25-Window-removebg-preview.png"
                      className="h-16"
                      alt=""
                    />
                    <p className=" text-white font-bold  inter headline1 text-3xl">
                      Workout
                    </p>
                  </a>
                </div>
                <div className="mt-6 lg:mb-0 mb-6">
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-[#007BFF] font-bold text-sm  mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation?ref=njs-profile"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://blog.creative-tim.com?ref=njs-profile"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.github.com/creativetimofficial?ref=njs-profile"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                        >
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-[#007BFF] text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/terms?ref=njs-profile"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/privacy?ref=njs-profile"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/contact-us?ref=njs-profile"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300"></hr>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
