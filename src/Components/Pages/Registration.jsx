import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { json, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import image from '../../../src/assets/lottieImage'
const Registration = () => {
  const {user, handleRegister, signOut, manageProfile, handleGoogleLogin,handleLogOut } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  useEffect(() => {
    document.title = "LearningLoop | Register";
  }, []);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userInfo = { name, photoUrl, email, password };
    if(password.length<6){
      setError("Password length must be minimum 6.")
      return;
    }
    if (!regex.test(password)) {
      setError(
        "Password must have at least Uppercase letter && Lowercser character."
      );
      return;
    }
    handleRegister(email, password)
      .then((res) => {
        
        manageProfile(name, photoUrl)
          .then(() => {
         
            navigate("/login");
            handleLogOut();

            
            Swal.fire({
              title: "Congrtulations. Successfully regestered.",
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
            console.error("Profile update error:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage); 
        console.error("Registration error:", error);
      });
  };


  const handleGoogleLoginBtn = () => {
    handleGoogleLogin()
      .then((res) => {
        navigate("/login"); 

        // Show success message
        handleLogOut();
        Swal.fire({
          title: "Congrtulations. Successfully regestered.",
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
        console.error("Error during Google login:", error);
      });
  };

  return (
    <div className="md:flex items-center justify-center min-h-[calc(100vh-95px)]
     bg-gradient-to-b from-purple-500 to-blue-500">
      <div className="">
          <Lottie animationData={image}></Lottie>
      </div>
      <div class="w-full max-w-md p-6 bg-indigo-900 rounded-lg shadow-lg h-[500px]">
        <h2 class="text-2xl font-bold text-center text-white mb-6">
          Registration Form
        </h2>
        <form onSubmit={handleSubmitForm} class="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="url"
              name="photoUrl"
              placeholder="Photo Url"
              class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            Register
          </button>
          <button
            type="submit"
            onClick={handleGoogleLoginBtn}
            class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            Register with Google
          </button>
        </form>
        <p className="text-xl text-red-500 text-center">{error}</p>
            <p className="text-[rgb(228,220,220)] text-center mt-4 font-semibold">
              Already have an account?{" "}
              <Link className="text-[rgb(223,130,93)]" to={"/login"}>
                Login
              </Link>
            </p>
      </div>
    </div>
  );
};

export default Registration;
