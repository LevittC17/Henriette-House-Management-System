import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/SuccessAlert";
import ErrorAlert from "../../components/ErrorAlert";
import Loginpic from "../../assets/Loginpic.png";

const SignUp = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState({
    title: "",
    description: "",
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const clearInputs = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (user.firstName.length < 3) {
      setError({
        title: "Input error",
        description: "First Name must be at least 3 characters long",
      });
      return;
    }

    axios.post("http://localhost:8015/api/Aprop/auth/signup", user)
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          setMessage({
            title: "Success",
            description: response.data.message,
          });
          setShowSuccess(true);
          setTimeout(() => {
            console.log("Account Created Successfully!");
            navigate("/login");
          }, 3000);
        }
      })
      .catch(error => {
        setError({
          title: "Error",
          description: error
        })
      })
  }

  return (
    <section className="bg-black overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
      <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
          <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
            <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-500 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
              SplitSpace
            </span>
          </div>

          <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
            <img
              src={Loginpic}
              alt="product"
              className="-mb-10 lg:mb-0 -ml-12 lg:ml-0 -mt-3 product h-[50px] xl:h-[300px] 2xl:h-[450px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
            ></img>

            <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
          </div>

          <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                {showSuccess && <SuccessPopup message={message} />}
                {error.title && <ErrorAlert error={error} />}
                <span className="text-3xl font-semibold text-black">
                  Sign Up
                </span>
              </div>

              <form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSignUp}
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-black dark:text-black"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="firstName"
                    required
                    value={user.firstName}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded-md border-black bg-yellow-300 text-sm text-black shadow-sm dark:border-black dark:text-black"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-black dark:text-black"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded-md border-black bg-yellow-300 text-sm text-black shadow-sm dark:border-black dark:text-black"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-black dark:text-black"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded-md border-black bg-yellow-300 text-sm text-black shadow-sm dark:border-black dark:text-black"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 dark:text-black"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="mt-1 w-full p-3 rounded-md border-black bg-yellow-300 text-sm text-black shadow-sm dark:border-black dark:text-black"
                  />
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-yellow-500 underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-yellow-500 underline">
                      {" "}
                      privacy policy{" "}
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-yellow-500 bg-yellow-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-yellow-600 focus:outline-none focus:ring active:text-yellow-500 dark:hover:bg-yellow-600 dark:hover:text-white"
                  >
                    Create An account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Already have an account?{" "}
                    <a href="/login" className="text-yellow-500 underline">
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessPopup = ({ message }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-yellow-500 mb-2">{message.title}</h2>
        <p className="text-grey-800">{message.description}</p>
      </div>
    </div>
  );
};

export default SignUp;
