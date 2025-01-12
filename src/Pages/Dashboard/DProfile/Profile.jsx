import { Helmet } from "react-helmet";
import Loading from "../../../Components/Loading/Loading";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const Profile = () => {
  const [isAdmin, isTrainer]  = useRole();
  console.log(isTrainer)
  const { user, loading } = useAuth();
  const lastSignInTime = user.metadata.lastSignInTime; // Assuming this is in GMT

  const date = new Date(lastSignInTime);
  const utcTime = date.getTime();
  const bstOffset = 6 * 60 * 60 * 1000;
  const bstTime = new Date(utcTime + bstOffset);
  const year = bstTime.getFullYear();
  const month = String(bstTime.getMonth() + 1).padStart(2, "0");
  const day = String(bstTime.getDate()).padStart(2, "0");
  const dateOnly = `${year}-${month}-${day}`;
  console.log(isAdmin);
  return (
    <div>
      <Helmet>
        <title>Workout - Profile</title>
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center  ">
          <div className="w-full max-w-sm bg-blue-100 border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10">
              <div
                className="w-full  "
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/7VGkHqb/brick-random-size-lite-blue-260nw-2177706495.jpg)",
                }}
              >
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg ring-2 relative top-14 -right-[140px] "
                  src={user.photoURL}
                  alt="User image"
                />
              </div>

              <div className=" p-5 text-center mt-10">
                <h5 className="mb-1 text-base bg-red-400 rounded-full font-medium text-gray-900">
                  {isAdmin ? "admin" : ""}
                </h5>
                <h5 className="mb-1 text-base bg-red-400 rounded-full font-medium text-gray-900">
                  {isTrainer ? "Trainer" : ""}
                </h5>
                <h5 className="mb-1 text-2xl font-medium text-gray-900">
                  {user.displayName}
                </h5>
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {user.email}
                </h5>
                <span className="text-sm text-gray-500">
                  Last log in : {dateOnly}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
