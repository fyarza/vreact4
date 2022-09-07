import React from 'react';
import {
  Feather,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from 'react-web-vector-icons';

function Settings() {
  return (
    <div className=" px-4 bg-white">
      <div className="flex  items-center justify-between">
        <Feather name="menu" size={20} color="#000" />
        <h1 className="font-bold text-xl text-black flex-1 text-center">
          Settings
        </h1>
      </div>
      <div className="bg-gray-50 mt-2 p-4 ">
        <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://fakeimg.pl/300/"
            alt="Rounded avatar"
          />
          <div className="flex-1 ml-4">
            <h1 className="font-bold text-base text-black">Jhon Smith</h1>
            <p className="text-sm text-gray-500">Basic Member</p>
          </div>
          <FontAwesome name="angle-right" size={20} color="#c4c4c4" />
        </div>
        <div className="mt-5 ">
          <div className="bg-blue-700 p-2 rounded-t-md shadow-md">
            <h1 className="font-bold text-white text-base">Accounts</h1>
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="lock" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Change Password
              </p>
              <FontAwesome name="angle-right" size={20} color="#000" />
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="bell" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Vehicle Management
              </p>
              <FontAwesome name="angle-right" size={20} color="#000" />
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <Feather name="settings" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Document Management
              </p>
              <FontAwesome name="angle-right" size={20} color="#000" />
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <MaterialIcons name="payment" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Payment
              </p>
              <FontAwesome name="angle-right" size={20} color="#000" />
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="sign-out" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Sign Out
              </p>
            </div>
          </div>
          <div className="bg-blue-200 p-2">
            <h1 className="text-base font-bold text-blue-500">More Options</h1>
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between px-4 py-1">
              <Entypo name="newsletter" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Newsletter
              </p>
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
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="envelope-o" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Text Message
              </p>
              <label
                htmlFor="default-toggle1"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle1"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <Feather name="phone-call" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Phone Call
              </p>
              <label
                htmlFor="default-toggle2"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle2"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="money" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Currency
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">$USD</p>
                <FontAwesome name="angle-right" size={20} color="#000" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="language" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Language
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">English</p>
                <FontAwesome name="angle-right" size={20} color="#000" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <FontAwesome name="link" size={20} color="#000" />
              <p className="font-bold text-base text-black flex-1 ml-4">
                Linkend Accounts
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">Facebook, go..</p>
                <FontAwesome name="angle-right" size={20} color="#000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
