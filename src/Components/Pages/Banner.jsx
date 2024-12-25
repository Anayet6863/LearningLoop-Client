import React from "react";
import { useNavigate } from "react-router-dom";
import 'animate.css';
const Banner = () => {
  const navigate = useNavigate();
  const handleBtn = ()=>{
    navigate('/services')

  }
  return (
    <div className="carousel w-full h-[500px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/G3wCDQ8/Robotics-Camp.jpg"
          className="w-full h-[500px]"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center
         ">
          <div class="ml-20 text-white animate__animated animate__bounce animate__slow animate__infinite">
            <h1 class="text-5xl font-bold">Welcome to Robotics Camp</h1>
            <h1 class="text-5xl font-bold">EDUCATION</h1>
            <p className="mt-4 text-lg">
              Learn, Innovate, and Build the Future
            </p>
            <button className="mt-6 px-6 py-3 bg-transparent border border-b-lime-400 hover:bg-green-600
             text-white font-semibold rounded-lg" onClick={handleBtn}>
              Join Now
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/KK5MGBb/Math-Tutoring.jpg"
          className="w-full h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div class="ml-20 text-white animate__animated animate__bounce animate__slow animate__infinite">
              <h2 className="text-4xl font-bold">
                Discover the Beauty of Mathematics
              </h2>

              <p className="mt-4 text-lg">
                Dive into the world of numbers, equations, and infinite
                possibilities.
              </p>
              <button className="mt-6 px-6 py-3 bg-transparent border border-b-lime-400 hover:bg-green-600
               text-white font-semibold rounded-lg" onClick={handleBtn}>
                Join Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/mNWRFSK/Online-Coding-Bootcamp.jpg"
          className="w-full h-[500px]"
        />

        <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div class="ml-20 text-white animate__animated animate__bounce animate__slow animate__infinite">
            <h2 className="text-4xl font-bold">Code Your Way to the Future</h2>

            <p className="mt-4 text-lg">
              Master programming, solve challenges, and build innovative
              projects.
            </p>
            <button className="mt-6 px-6 py-3 bg-transparent border border-b-lime-400 hover:bg-green-600
             text-white font-semibold rounded-lg" onClick={handleBtn}>
              Join Now
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/rsgH39g/Public-Speaking-Training.webp"
          className="w-full h-[500px]"
        />

        <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div class="ml-20 text-white animate__animated animate__bounce animate__slow animate__infinite">
            <h2 className="text-4xl font-bold">
              Feel the Rhythm of Creativity
            </h2>
            <p className="mt-4 text-lg">
              Dive into melodies, explore harmonies, and create your musical
              journey.
            </p>
            <button className="mt-6 px-6 py-3 bg-transparent border border-b-lime-400 hover:bg-green-600
             text-white font-semibold rounded-lg" onClick={handleBtn}>
              Join Now
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
