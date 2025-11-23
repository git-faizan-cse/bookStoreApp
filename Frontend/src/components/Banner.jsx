import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-15 flex flex-col md:flex-row ">
        {/* This is left div for pc */}
        <div className="w-full md:w-1/2 mt-12 md:mt-28 order-2 md:order-1">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              aspernatur in eveniet voluptatibus mollitia a inventore rerum
              laudantium. Nulla deserunt consequatur dolores ut ipsum. Eos eius
              perspiciatis nam amet placeat.
            </p>

            <label className="input validator  dark:bg-slate-900 dark:text-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>

            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-soft btn-secondary mb-4 ">
            Get Started
          </button>
        </div>
        {/* this is right side image div */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src="/Banner.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
