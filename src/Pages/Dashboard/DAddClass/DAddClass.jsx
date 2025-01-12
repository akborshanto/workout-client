import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const DAddClass = () => {
  const axiosSecure = useAxiosSecure();
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.value;
    const bookings = 0;
    const data = { name, title, description, image, bookings };
    console.log(data);
    axiosSecure
      .post("/classes", data)
      .then((res) => {
        if (res) {
          toast.success("Class added");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <div>
      <Helmet>
        <title>Workout - Add classe</title>
      </Helmet>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-4xl text-center font-semibold mb-4">
          Add New Class
        </h2>
        <form onSubmit={(e) => handleFormData(e)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              required={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              required={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              required={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              required={true}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="image"
              type="text"
              placeholder="Enter image URL"
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DAddClass;
