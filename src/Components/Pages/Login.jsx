import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // if(password.length<6){
    //   setError("Password length must be minimum 6.")
    //   return;
    // }
    // if (!regex.test(password)) {
    //   setError(
    //     "Password must have at least Uppercase letter && Lowercser character."
    //   );
    //   return;
    // }
    //console.log(email,password);
    handleLogin(email, password)
      .then((res) => {
        // console.log(location.state);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
        Swal.fire({
          title: "Loged in successfully.",
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
          },
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Email or Password invalid.");
      });
  };
  const handleGoogleLoginBtn = () => {
    handleGoogleLogin()
      .then((res) => {
        // console.log(location.state);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
        Swal.fire({
          title: "Loged in successfully.",
          showClass: {
            popup: `
                 animate__animated
                 animate__fadeInUp
                 animate__faster
               `,
          },
          hideClass: {
            popup: `
                 animate__animated
                 animate__fadeOutDown
                 animate__faster
               `,
          },
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Email or Password invalid.");
      });
  };
  return (
    <div className="min-h-[calc(100vh-95px)] bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 flex items-center justify-center ">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-4xl w-full ">
        {/* <!-- Left Section --> */}
        <div class="w-1/2 bg-gradient-to-b from-purple-700 to-indigo-600 p-8 text-white hover:border hover:border-white">
          <div class="flex flex-col h-full justify-center">
            <h1 class="text-3xl font-bold mb-4">Welcome to LearnigLoop</h1>
            <p class="text-lg mb-8">Please login to have fun.</p>
            <div class="flex flex-col items-start gap-4 p-4 rounded-lg text-white">
              <div class="flex items-center gap-2">
                <img
                  src="https://i.ibb.co.com/CWqTS2j/image-2024-12-21-23-59-53.png"
                  alt="Logo"
                  class="w-12 h-12 rounded-full"
                />
                <p class="font-semibold text-white">www.learnigloop.com</p>
              </div>

              <div className="flex flex-col">
                <div>
                  <p class="text-xl text-gray-300 bg-red-500 text-center rounded-md">{error}</p>

                  <p class="text-gray-100 font-semibold">
                    Doesn't have an account?
                    <a
                      href="/login"
                      class="text-red-500 underline hover:text-red-700  ml-2"
                    >
                      Please register first.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div class="w-1/2 p-8 hover:border hover:border-black">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          <form class="space-y-4" onSubmit={handleLoginForm}>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-lg font-semibold 
              hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
          <p class="text-center text-gray-500 my-4">
            or Connect with Social Media
          </p>

          <div class="space-y-4">
            <button
              onClick={handleGoogleLoginBtn}
              class="w-full py-3 flex items-center justify-center bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
