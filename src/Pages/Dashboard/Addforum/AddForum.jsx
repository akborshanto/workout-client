import { useState } from "react";
import useRole from "../../../Hooks/useRole";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPablic from "../../../Hooks/useAxiosPpablic";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddForum = () => {
  const axiosPublic = useAxiosPablic();
  const { user } = useAuth();
  const [, , , role] = useRole();
  console.log(role);
  const [text, setText] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
    const data = {
      role,
      user,
      text,
    };
    console.log(data);
    axiosPublic
      .post("/forumpost", data)
      .then((res) => {
        if (res.data) {
          toast.success("Post added to the coumunity");
          e.target.reset()
        }
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
        <Helmet>
        <title>Workout - Add Forum</title>
      </Helmet>
      <div className="max-w-md mx-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Submit Your Text
          </h2>
          <div className="mb-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForum;
