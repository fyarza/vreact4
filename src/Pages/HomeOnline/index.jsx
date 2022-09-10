import React, { useState } from 'react';
import { Feather } from 'react-web-vector-icons';

function HomeOnline() {
  return (
    <div className=" px-4 bg-white py-2">
      <div className="flex  items-center justify-between">
        <Feather name="arrow-left" size={20} color="#000" />
        <h1 className="font-bold text-xl text-[#1c2244] flex-1 text-center">
          Online
        </h1>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="bg-[#f3f3fb] mt-2 p-4 ">
        <div className="flex  items-center space-x-2 bg-[#f7f7f7] shadow-sm rounded-t-xl p-2">
          <img
            className="w-12 h-12 rounded-full"
            src="https://fakeimg.pl/300/"
            alt="Rounded avatar"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-md text-black">Jhon Smith</h1>
              <p className="font-bold text-black text-base">$20.00</p>
            </div>
            <p className="font-bold text-xs text-gray-500">2.2km</p>
          </div>
        </div>
        <div className="bg-white rounded-b-xl">
          <div className="p-4">
            <p className="font-bold text-gray-500 text-xs">PICK UP</p>
            <p className="font-medium text-base mt-1">
              969 Us West, Demopolis AL 36732,
            </p>
            <div className="w-full h-0.5 bg-gray-200 mt-2" />
          </div>
          <div className="p-4">
            <p className="font-bold text-gray-500 text-xs">DROP OFF</p>
            <p className="font-medium text-base mt-1">
              South Oates Street, Dothan AL 36301
            </p>
            <div className="w-full h-0.5 bg-gray-200 mt-2" />
          </div>
          <div className="flex items-center justify-around">
            <a
              href="#"
              className="text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Ignore
            </a>
            <a
              href="#"
              className="text-white bg-[#5b211f] hover:bg-[#5b211f] focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Accept
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3fb] p-4">
        <div className="flex  items-center space-x-2 bg-[#f7f7f7] shadow-sm rounded-t-xl p-2">
          <img
            className="w-12 h-12 rounded-full"
            src="https://fakeimg.pl/300/"
            alt="Rounded avatar"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-md text-black">Jhon Smith</h1>
              <p className="font-bold text-black text-base">$20.00</p>
            </div>
            <p className="font-bold text-xs text-gray-500">2.2km</p>
          </div>
        </div>
        <div className="bg-white rounded-b-xl">
          <div className="p-4">
            <p className="font-bold text-gray-500 text-xs">PICK UP</p>
            <p className="font-medium text-base mt-1">
              969 Us West, Demopolis AL 36732,
            </p>
            <div className="w-full h-0.5 bg-gray-200 mt-2" />
          </div>
          <div className="p-4">
            <p className="font-bold text-gray-500 text-xs">DROP OFF</p>
            <p className="font-medium text-base mt-1">
              South Oates Street, Dothan AL 36301
            </p>
            <div className="w-full h-0.5 bg-gray-200 mt-2" />
          </div>
          <div className="flex items-center justify-around">
            <a
              href="#"
              className="text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Ignore
            </a>
            <a
              href="#"
              className="text-white bg-[#5b211f] hover:bg-[#5b211f] focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Accept
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOnline;
