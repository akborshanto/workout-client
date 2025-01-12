import Loading from "react-loading";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowDown, FaArrowUp, FaClock } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RecentForumPost = () => {
  // const axiosPublic = useAxiosPablic();
  // const { data: forumpostHome = [], isLoading } = useQuery({
  //   queryKey: ["forumpostHome"], // Pass query key as an object
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/forumpostHome`);
  //     return res.data;
  //   },
  // });
  // console.log(forumpostHome);
  // const handleBtn = (text) => {
  //   toast.success(text);
  // };
  return (
    // <div
    //   className="  bg-cover bg-center bg-fixed"
    //   style={{
    //     backgroundImage:
    //       "url(https://technext.github.io/crossfits/images/hero_bg_2.jpg)",
    //   }}
    // >
    //   <div className="relative py-10 w-full space-y-4 max-w-7xl m-auto px-5 md:px-10">
    //     <h1 className="lg:block hidden  uppercase text-7xl mt-0  absolute -left-0 outline-text-gym bottom-0 opacity-30">
    //       Features
    //     </h1>
    //     <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
    //       Explore Our <br /> Recent{" "}
    //       <span className="text-[#007BFF]">Forum post</span>
    //     </h1>
    //     <p className="text-center text-white  text-sm md:text-base md:px-20">
    //     This component elegantly presents forum posts, intelligently truncating lengthy content while preserving readability. By condensing extensive posts to a digestible length and appending an ellipsis for extended text, it maintains a visually appealing interface.
    //     </p>
    //   </div>
    //   {isLoading ? (
    //     <Loading />
    //   ) : (
    //     <div className=" md:px-10 pb-10 grid md:grid-cols-2 grid-cols-1 px-5 max-w-7xl m-auto">
    //       {forumpostHome.map((post) => (
    //       <Link to={"/community"}  key={post._id}>  <div

    //       className="max-w-lg mx-auto mt-8 border-white border rounded-lg border-opacity-15 bg-black bg-opacity-10 backdrop-blur-md duration-500 text-white"
    //     >
    //       <div className="  text-whiterounded-md p-4 mb-4">
    //         <p className="">
    //           {post.text.length > 300
    //             ? post.text.slice(0, 300) + "..."
    //             : post.text}
    //         </p>
    //         <div className="mt-2 flex justify-between items-center">
    //           <div className="flex gap-4">
    //             <img
    //               src={post.user.photoURL}
    //               className="h-14 rounded-full"
    //               alt=""
    //             />
    //             <div>
    //               <h1>{post.user.displayName}</h1>
    //               <p>{post.role}</p>
    //             </div>
    //           </div>
    //           <div className=" flex gap-5    ">
    //             <button
    //               onClick={() => handleBtn("Up vote")}
    //               className=" p-2 px-4 border rounded-full bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
    //             >
    //               <FaArrowUp />
    //             </button>
    //             <button
    //               onClick={() => handleBtn("Dowon vote")}
    //               className="p-2 px-4 border rounded-full bg-[#ff0000] font-bold border-[#ff0000] bt text-white hover:bg-transparent hover:text-[#ff0000] duration-500"
    //             >
    //               <FaArrowDown />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div></Link>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <>
      <div className="relative py-10 w-full space-y-4 max-w-7xl m-auto px-5 md:px-10 ">
        <div>
          <h1 className="lg:block hidden  uppercase text-7xl mt-0  absolute -left-0 outline-text-gym bottom-0 opacity-30">
            Features
          </h1>
          <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
            Explore Our <br /> Recent{" "}
            <span className="text-[#007BFF]">Forum post</span>
          </h1>
          <p className="text-center text-white  text-sm md:text-base md:px-20">
            This component elegantly presents forum posts, intelligently
            truncating lengthy content while preserving readability. By
            condensing extensive posts to a digestible length and appending an
            ellipsis for extended text, it maintains a visually appealing
            interface.
          </p>
        </div>
      </div>
      <div className=" py-10 w-full space-y-4 max-w-7xl m-auto px-5 md:px-10 ">
        <div className="grid lg:grid-cols-3 grid-cols-2  md:gap-7 gap-3 ">
          <div className=" overflow-hidden rounded-3xl lg:h-full h-72  ">
            <div className="h-full relative w-full group   bg-cover bg-top bg-no-repeat hover:bg-zoom">
              <img
                src="https://i.ibb.co.com/4JYj3N8/blog-001-495x700.jpg"
                className="h-full w-full object-cover group-hover:scale-105 duration-500 object-top"
                alt=""
              />
              <div className="h-full absolute top-0 w-full  bg-gradient-to-t p-4 from-[#007bff]/35 to-transparent">
                <div className=" h-full flex items-end">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src="https://i.ibb.co.com/YWm5FHt/blog-01.jpg"
                        className="h-6 rounded-full ring-[1px] ring-white
                     w-6 object-cover object-center"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <p className="headline text-sm text-white">
                          Habib ulla
                        </p>
                        <div className="headline text-[8px] text-white">
                          <p className="flex gap-1 items-center">
                            <FaClock className="text-[10px] text-[#007bff]" />{" "}
                            <span>1 September, 2024</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-white md:text-xl text-sm font-extrabold  duration-300 cursor-pointer headline hover:text-[#007bff]">
                      Exploring the Vast World of Yoga: A Comprehensive Guide to
                      Different Types
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" overflow-hidden rounded-3xl lg:h-full h-72">
            <div className="h-full relative w-full group   bg-cover bg-top bg-no-repeat hover:bg-zoom">
              <img
                src="https://i.ibb.co.com/RCbddN8/blog-002-495x700.jpg"
                className="h-full w-full object-cover group-hover:scale-105 duration-500 object-top"
                alt=""
              />
              <div className="h-full absolute top-0 w-full  bg-gradient-to-t p-4 from-[#007bff]/35 to-transparent">
                <div className=" h-full flex items-end">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src="https://i.ibb.co.com/YWm5FHt/blog-01.jpg"
                        className="h-6 rounded-full ring-[1px] ring-white
                     w-6 object-cover object-center"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <p className="headline text-sm text-white">
                          Habib ulla
                        </p>
                        <div className="headline text-[8px] text-white">
                          <p className="flex gap-1 items-center">
                            <FaClock className="text-[10px] text-[#007bff]" />{" "}
                            <span>1 September, 2024</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-extrabold md:text-xl text-sm duration-300 cursor-pointer headline hover:text-[#007bff]">
                      Exploring the Vast World of Yoga: A Comprehensive Guide to
                      Different Types
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full w-full col-span-2 lg:col-span-1 lg:block md:grid md:grid-cols-2   md:space-y-7 space-y-3">
            <div className="flex gap-3 w-full group ">
              <div className="h-32 w-32 rounded-3xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/1KnxHrw/blog-02-500x500.jpg"
                  alt=""
                  className="h-full w-full rounded-3xl duration-500 group-hover:scale-105 dur"
                />
              </div>
              <div className="flex-1 text-white hover:text-[#007bff] cursor-pointer duration-300 flex justify-evenly flex-col">
                <p className="text-[12px] headline  text-white\ w-full">
                  Exploring the Vast World of Yoga: A Comprehensive Guide to
                  Different Types
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="https://i.ibb.co.com/YWm5FHt/blog-01.jpg"
                    className="h-6 rounded-full ring-[1px] ring-white
                     w-6 object-cover object-center"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="headline text-xs text-white">Habib ulla</p>
                    <div className="headline text-[8px] text-white">
                      <p className="flex  items-center">
                        <span>1 September, 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full group ">
              <div className="h-32 w-32 rounded-3xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/ZKrg0Jg/blog-03-500x500.jpg"
                  alt=""
                  className="h-full w-full rounded-3xl duration-500 group-hover:scale-105 dur"
                />
              </div>
              <div className="flex-1 text-white hover:text-[#007bff] cursor-pointer duration-300 flex justify-evenly flex-col">
                <p className="text-[12px] headline  text-white\ w-full">
                  Exploring the Vast World of Yoga: A Comprehensive Guide to
                  Different Types
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="https://i.ibb.co.com/YWm5FHt/blog-01.jpg"
                    className="h-6 rounded-full ring-[1px] ring-white
                     w-6 object-cover object-center"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="headline text-xs text-white">Habib ulla</p>
                    <div className="headline text-[8px] text-white">
                      <p className="flex  items-center">
                        <span>1 September, 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full group ">
              <div className="h-32 w-32 rounded-3xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/YWm5FHt/blog-01.jpg"
                  alt=""
                  className="h-full w-full rounded-3xl duration-500 group-hover:scale-105 dur"
                />
              </div>
              <div className="flex-1 text-white hover:text-[#007bff] cursor-pointer duration-300 flex justify-evenly flex-col">
                <p className="text-[12px] headline  text-white\ w-full">
                  Exploring the Vast World of Yoga: A Comprehensive Guide to
                  Different Types
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="https://i.ibb.co.com/YWm5FHt/blog-01.jpg"
                    className="h-6 rounded-full ring-[1px] ring-white
                     w-6 object-cover object-center"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="headline text-xs text-white">Habib ulla</p>
                    <div className="headline text-[8px] text-white">
                      <p className="flex  items-center">
                        <span>1 September, 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full group ">
              <div className="h-32 w-32 rounded-3xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/F6WvCmL/blog-04.jpg"
                  alt=""
                  className="h-full w-full rounded-3xl duration-500 group-hover:scale-105 dur"
                />
              </div>
              <div className="flex-1 text-white hover:text-[#007bff] cursor-pointer duration-300 flex justify-evenly flex-col">
                <p className="text-[12px] headline  text-white\ w-full">
                  Exploring the Vast World of Yoga: A Comprehensive Guide to
                  Different Types
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="https://i.ibb.co.com/F6WvCmL/blog-04.jpg"
                    className="h-6 rounded-full ring-[1px] ring-white
                     w-6 object-cover object-center"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="headline text-xs text-white">Habib ulla</p>
                    <div className="headline text-[8px] text-white">
                      <p className="flex  items-center">
                        <span>1 September, 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentForumPost;

// https://i.ibb.co.com/F6WvCmL/blog-04.jpg
// https://i.ibb.co.com/ZKrg0Jg/blog-03-500x500.jpg
// https://i.ibb.co.com/1KnxHrw/blog-02-500x500.jpg
// https://i.ibb.co.com/YWm5FHt/blog-01.jpg
// https://i.ibb.co.com/4JYj3N8/blog-001-495x700.jpg
// https://i.ibb.co.com/RCbddN8/blog-002-495x700.jpg
