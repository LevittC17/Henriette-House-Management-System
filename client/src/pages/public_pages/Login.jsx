import React, { useState } from 'react';
import Loginpic from '../../assets/Loginpic.png';
import axios from 'axios';

const ErrorAlert = ({ error }) => {
  return (
    <div className="absolute top-16 right-0 left-0 mx-auto w-96 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
      <h4 className="alert-heading font-bold mb-2">{error.title}</h4>
      <p className='block sm:inline'>{error.description}</p>
    </div>
  );
};

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState({
    title: "",
    description: ""
  });

  const [error, setError] = useState({
    title: "",
    description: ""
  });

  const signIn = (e) => {
    e.preventDefault();

    setError({ title: "", description: "" });
    setMessage({ title: "", description: "" });

    
    if (!user.email || !user.password) {
      setError({
        title: "Input Error",
        description: "Please enter both email and password."
      });
      return;
    }

    axios.post(`http://localhost:8015/api/Aprop/auth/signin`, user)
      .then(response => {
        if (response.status === 200) {
          setMessage({ title: 'Success', description: response.data.message });

          const localUserData = JSON.stringify(response.data.user);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', localUserData);

          setTimeout(() => {
            console.log("Login Successful");
            window.location.replace('/addproperty');
          }, 2000);
        }
      })
      .catch(err => {
        setError({
          title: "Input error",
          description: "Passwords do not match"
        });
      });
  };

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:8015/api/Aprop/auth/forgot-password`, { email: user.email });
      setMessage({ title: 'Success', description: response.data.message });
    } catch (error) {
      setError({ title: "Error", description: error.response.data.message });
    }
  };

  return (
    <section className="bg-black overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
      <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        
        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
          
          <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
            <img
              src={Loginpic}
              alt="product"
              className="-mb-10 lg:mb-0 -ml-12 lg:ml-0 -mt-3 product h-[50px] xl:h-[300px] 2xl:h-[450px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
            />
            <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
          </div>
          <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">
              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                {message.title && <SuccessPopup message={message} />}
                <span className="text-3xl font-semibold text-black">Sign Up</span>
              </div>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={signIn}>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Email" className="block text-sm font-medium text-black dark:text-black">Email</label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    className="mt-1 w-full p-3 rounded-md border-black bg-yellow-300 text-sm text-black shadow-sm dark:border-black dark:text-black"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-black dark:text-black">Password</label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    className="mt-1 w-full p-3 rounded-md border-black bg-yellow-300 text-sm text-black shadow-sm dark:border-black dark:text-black"
                  />
                </div>
                <div className="col-span-6 text-right">
                  <a href="#" onClick={handleForgotPassword} className="text-sm text-yellow-500 hover:underline">Forgot Password?</a>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-yellow-500 bg-yellow-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-yellow-600 focus:outline-none focus:ring active:text-yellow-500 dark:hover:bg-yellow-600 dark:hover:text-white"
                  >
                    Login
                  </button>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    Does not have an account? <a href="/Signup" className="text-yellow-500 underline">Create an account</a>.
                  </p>
                </div>
              </form>
              {error.title && <ErrorAlert error={error} />}
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

export default Login;
