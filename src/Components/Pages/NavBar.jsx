import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../../src/index.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import { useTheme } from "./ThemeContext";

const NavBar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  // console.log(user);
  const [isChecked, setIsChecked] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleThemeBtn = () => {
    toggleTheme();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  //console.log(user);
  //console.log(user?.displayName);
  //  const isChecked = true;
  const handleLogOutBtn = () => {
    handleLogOut();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully logOut.",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value); // Update the selected value state
    if (value) {
      navigate(value); // Navigate to the selected route
    }
  };
  const links = [
    <div className="nav space-x-4 p-3 w-auto h-auto flex flex-col md:block">
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
          className="p-2 rounded-md text-lg font-bold cursor-pointer focus:bg-purple-700 focus:text-white focus:border-purple-700 focus:outline-purple-700"
        >
          <option value="">Dashboard</option>
          <option value="/addServices">Add Service</option>
          <option value="/manageServices">Manage Service</option>
          <option value="/bookedServices">Booked Services</option>
          <option value="/serviceToDo">Service To-Do</option>
        </select>
      )}
      <button
        className="btn w-12 h-12 flex items-center justify-center rounded-full p-1 bg-base-100 mr-3 lg:hidden"
        onClick={() => {
          handleThemeBtn();
          handleCheckboxChange();
        }}
      >
        {isChecked ? (
          <img
            src="https://i.ibb.co.com/yFbw5wL/icons8-sun-50.png"
            alt="Light Theme"
            className="w-10 h-10 rounded-[100%]"
          />
        ) : (
          <img
            src="https://i.ibb.co.com/xHXjTGv/icons8-sun-50-1.png"
            alt="Dark Theme"
            className="w-10 h-10 rounded-[100%]"
          />
        )}
      </button>
    </div>,
  ];

  return (
    <div className="navbar bg-base-500 fixed top-0 left-0 w-full  shadow-md z-50 backdrop-blur-lg bg-opacity-50
      md:pl-24 md:pr-24">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-76 h-76 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/Sshq3mX/DALL-E-2024-12-24-10-52-03-A-colorful-modern-logo-design-for-an-educational-brand-The-logo-features.webp"
            alt=""
            className="w-[30px h-[30px] md:w-[50px] md:h-[50px] rounded-full hover:scale-150"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold leckerli-one-regular  md:ml-4">
          LearningLoop
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center ">{links}</ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn w-12 h-12 items-center justify-center rounded-full p-1 bg-gray-200 mr-3 hidden sm:block"
          onClick={() => {
            handleThemeBtn();
            handleCheckboxChange();
          }}
        >
          {isChecked ? (
            <img
              src="https://i.ibb.co.com/yFbw5wL/icons8-sun-50.png"
              alt="Light Theme"
              className="w-10 h-10 rounded-[100%]"
            />
          ) : (
            <img
              src="https://i.ibb.co.com/xHXjTGv/icons8-sun-50-1.png"
              alt="Dark Theme"
              className="w-10 h-10 rounded-[100%]"
            />
          )}
        </button>

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
              <button
                onClick={handleLogOutBtn}
                className="btn btn-neutral text-white"
              >
                LogOut
              </button>
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
