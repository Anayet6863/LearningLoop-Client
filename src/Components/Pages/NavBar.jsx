import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../../src/index.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from "sweetalert2";

const NavBar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  console.log(user);
  //   const { theme, toggleTheme } = useTheme();
  //   console.log(theme);
  //   const handleLogOutBtn = () => {
  //     handleLogOut();
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Successfully logOut.",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   };
  //   const handleThemeBtn = () => {
  //     toggleTheme();
  //     console.log("Clicked");
  //   };

  //   const [isChecked, setIsChecked] = useState(false);
  //   const handleCheckboxChange = () => {
  //     setIsChecked(!isChecked);
  //  };
  //console.log(user);
  //console.log(user?.displayName);
 
  const handleLogOutBtn=()=>{
    handleLogOut()
   
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully logOut.",
            showConfirmButton: false,
            timer: 1500,
          });
  }
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value); // Update the selected value state
    if (value) {
      navigate(value); // Navigate to the selected route
    }
  };
  const links = [
    <div className="nav space-x-4 p-3 w-auto h-auto ">
      <NavLink to="/" className="p-2 text-xl font-bold">
        Home
      </NavLink>
      <NavLink to="/services" className="p-2 text-xl font-bold">
        Service
      </NavLink>
      {user && (
        <select
        value={selectedValue} // Set the value based on state
        onChange={handleChange}
        className="p-2 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Dashboard</option>
        <option value="/addServices">Add Service</option>
        <option value="/manageServices">Manage Service</option>
        <option value="/bookedServices">Booked Services</option>
        <option value="/serviceToDo">Service To-Do</option>
      </select>
      )}

      {/* <div className="lg:hidden">
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
                onClick={handleThemeBtn}
              />
               <span
                className={`label flex items-center text-sm font-medium ${
                  isChecked ? "text-gray-300" : "text-black"
                }`}
              >
                Light
              </span>
              <span
                className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                  isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                }`}
              >
                <span
                  className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                    isChecked ? "translate-x-[28px]" : ""
                  }`}
                ></span>
              </span>
              <span
                className={`label flex items-center text-sm font-medium ${
                  isChecked ? "text-gray-300" : "text-black"
                }`}
              >
                Dark
              </span>
            </label>
      </div> */}
    </div>,
  ];

  return (
    <div className="navbar bg-base-500 fixed top-0 left-0 w-full  shadow-md z-50 backdrop-blur-lg bg-opacity-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 h-76 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/CWqTS2j/image-2024-12-21-23-59-53.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold ml-2">LearningLoop</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center ">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <div className="hidden lg:block">
            <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
                onClick={handleThemeBtn}
              />
               <span
                className={`label flex items-center text-sm font-medium ${
                  isChecked ? "text-gray-300" : "text-black"
                }`}
              >
                Light
              </span>
              <span
                className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                  isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
                }`}
              >
                <span
                  className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                    isChecked ? "translate-x-[28px]" : ""
                  }`}
                ></span>
              </span>
              <span
                className={`label flex items-center text-sm font-medium ${
                  isChecked ? "text-gray-300" : "text-black"
                }`}
              >
                Dark
              </span>
            </label>
            {/* <label>
              <button  className="bg-gray-600 rounded-[50%] btn mr-3" onClick={handleThemeBtn}></button>
            </label> 
          </div> */}

        <div className="flex gap-3">
          {user && user?.email && user?.photoURL ? (
            <div
              title={user?.displayName}
              className="w-12 h-12 rounded-full border-2 border-solid  border-purple-500"
            >
              <img
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            <div
              title={user?.displayName}
              className="w-12 h-12 rounded-full border-2 border-solid border-purple-500 
                bg-[url('https://i.ibb.co.com/mN4JGBf/GTY-Special-Offer-Page-Hero-5x2.webp')] bg-cover bg-center"
            ></div>
          )}
          {user && user?.email ? (
            <Link to={"/"}>
              <button onClick={handleLogOutBtn} className="btn btn-neutral text-white">LogOut</button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="bg-purple-900 btn text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
