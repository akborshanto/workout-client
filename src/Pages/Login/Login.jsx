import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Googlebtn from "../../Components/GoogleBtn/Googlebtn";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const navigate = useNavigate();
  const { signOutUser, signInUser, setLoading } = useAuth();

  // show password and hide logic
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //  react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    signOutUser();
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Login sucsessful");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password. Please try again.");
          setLoading(false);
        }
      });
  };

  return (
    <div className="bg-cover bg-center min-h-screen ">
      <Helmet>
        <title>Workout - Login</title>
      </Helmet>
      <div className="md:flex h-full w-full justify-center container m-auto pt-32">
        <div className="w-full">
          <section className="w-full">
            <div className=" w-full flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="grid md:grid-cols-2 grid-cols-1  w-[85%] m-auto bg-black border-white/15  rounded-3xl overflow-hidden ">
                <div
                  className="h-full md:block hidden relative w-full bg-cover bg-right overflow-hidden "
                  style={{
                    backgroundImage:
                      "url(https://www.irreverentgent.com/wp-content/uploads/2016/04/How-to-Workout-Plan-banner-new.jpg)",
                  }}
                >
                  <div className="h-full absolute  flex justify-end items-end -bottom-16 left-0">
                    <p className="text-[130px] anton uppercase text-nowrap   font-extrabold text-[#141414] tracking-widest">
                      Sign in{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full  text-black bg-white  shadow md:mt-0  xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                      Sign in to your account
                    </h1>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4 md:space-y-6"
                      action="#"
                    >
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium "
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          {...register("email", { required: true })}
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <span className="text-red-500">
                            Email is required
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium "
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            {...register("password", { required: true })}
                            placeholder="Enter a strong password"
                            className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            autoComplete="current-password" // Added autocomplete attribute
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <button
                              type="button" // Ensure this button does not submit the form
                              onClick={togglePasswordVisibility}
                              className="text-black hover:text-gray-700 focus:outline-none"
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          </div>
                        </div>

                        {errors.password && (
                          <span className="text-red-500">
                            Password is required
                          </span>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white font-bold bg-[#007BFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 headline1 rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Login
                      </button>
                    </form>

                    <Googlebtn />

                    <div className="text-sm font-light text-center">
                      Don’t have an account yet?
                      <Link
                        to={"/signup"}
                        className="font-medium text-info ml-1 hover:underline"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
