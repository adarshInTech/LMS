import React from "react";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10 ">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full ">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full ">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items_start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles , and resources ,sent to your inbox weekly
          </p>
          <div className="flex flex-row gap-4 mt-5">
            <input
              className="bg-[#1F2937] placeholder-gray-500 border border-gray-500/30 p-2 text-gray-500"
              type="email"
              placeholder="Enter your email"
              flex
              flex-col
              md:items-start
              items-center
              w-full
            />
            <button className="text-white bg-blue-700 p-2 rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 © All right reserverd
      </p>
    </footer>
  );
};

export default Footer;
