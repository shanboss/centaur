"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInComponent() {
  const imageUrl = "url(/backGround.png)"; // Replace with your image path

  const router = useRouter();
  const handleSignUp = () => {
    router.push("./signUp");
  };
  const handleSignIn = () => {
    router.push("./adminDashboard");
  };

  return (
    <div
      style={{
        backgroundImage: imageUrl,
        backgroundSize: "cover", // Covers the entire area of the div
        backgroundPosition: "center", // Centers the background image
        height: "100vh", // Example height, can be adjusted
      }}
    >
      <div className=" h-screen flex justify-center items-center">
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
          <div className="relative flex flex-col items-center text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <div className="block text-3xl antialiased font-semibold text-blue-gray-900 text-center">
              Welcome to Centaur Data Platform
            </div>
            <div class="block  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Sign In
            </div>
            <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
              <div class="flex flex-col gap-6 mb-1">
                <h6 class="block -mb-3  text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Your Email
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    placeholder="name@mail.com"
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <h6 class="block -mb-3  text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Password
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    placeholder="********"
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
              </div>
              <button
                class="mt-6 block w-full select-none rounded-lg bg-gray-900 hover:bg-white hover:text-black py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={handleSignIn}
              >
                sign in
              </button>
              <p class="block mt-4  text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                Don't have an account?
                <a
                  onClick={handleSignUp}
                  class="hover:underline text-gray-900 pl-2 font-semibold hover:cursor-pointer"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
