import React from "react";
import { RiShoppingCartLine, RiSearchLine } from "react-icons/ri";
import HeaderPopup from "./HeaderPopup";

function HeaderPrimary() {
  return (
    <div>
        <HeaderPopup/>
    <div className="headerPrimary bg-white shadow-md flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 text-base">
     <div className=" flex flex-row space-x-20">
      <div className="left flex items-center">
        <div className="udemyLogo">
          <img src="/logo.png" className="logo h-10 w-auto" alt="logo"></img>
        </div>
        <div className="ml-8">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid  flex-1 ml-4 sm:ml-6 lg:ml-8 relative">
        <div className="searchIcon  absolute left-0 flex justify-center items-center h-8 w-10">
          <RiSearchLine className="icon mt-2" />
        </div>
        <input
          className="searchBar pl-12 border w-96 border-gray-300 rounded-full h-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Search for anything"
        ></input>
      </div>
      </div>
      <div className="right flex  items-center">
        <div className="w-20 mx-10">
          <span className="business">Udemy for Business</span>
        </div>
        <div className="w-20">
          <span className="teach">Teach on Udemy</span>
        </div>
        <div className="cartDiv ml-4">
          <RiShoppingCartLine className="icon" />
        </div>
        <div className="login button bg-white text-[#597cbd] border border-[#597cbd] hover:text-[#597cbd] hover:border-[#456299] rounded-md px-4 py-1 ml-4 cursor-pointer">
          Log In
        </div>
        <div className="signup button bg-[#6b92da] text-white border border-[#597cbd] hover:bg-[#597cbd] hover:border-[#456299] rounded-md px-4 py-1 ml-2 cursor-pointer">
          Sign up
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeaderPrimary;
