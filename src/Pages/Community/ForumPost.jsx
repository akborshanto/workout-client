import toast from "react-hot-toast";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ForumPost = ({ post }) => {
  const handleBtn = (text) => {
    toast.success(text);
  };
  console.log(post);
  return (
    <div className="max-w-lg mx-auto mt-8">
      <div key={post._id} className="bg-white shadow-md rounded-md p-4 mb-4">
        <p className="text-gray-800">{post.text}</p>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex gap-4">
            <img
              src={post.user.photoURL}
              className="h-14 rounded-full"
              alt=""
            />
            <div>
              <h1>{post.user.displayName}</h1>
              <p>{post.role}</p>
            </div>
          </div>
          <div className=" flex gap-5    ">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleBtn("Up vote")}
                className=" p-2 px-4 border rounded-full bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
              >
                <FaArrowUp />
              </button>
              <p className="text-sm font-bold">{post.upVote}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleBtn("Dowon vote")}
                className="p-2 px-4 border rounded-full bg-[#ff0000] font-bold border-[#ff0000] bt text-white hover:bg-transparent hover:text-[#ff0000] duration-500"
              >
                <FaArrowDown />
              </button>
              <p className="text-sm font-bold">{post.downVote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
