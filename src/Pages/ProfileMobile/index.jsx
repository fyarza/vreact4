import React from 'react';
import { Feather, FontAwesome, FontAwesome5 } from 'react-web-vector-icons';

function ProfileMobile() {
  return (
    <div className=" px-4 bg-white py-2">
      <div className="flex  items-center justify-between">
        <Feather name="arrow-left" size={20} color="#000" />
        <h1 className="font-bold text-xl text-black flex-1 text-center">
          Profile
        </h1>
        <FontAwesome5 name="user-edit" size={20} color="#000" />
      </div>
      <div className="bg-gray-50 mt-2 p-4 ">
        <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4">
          <img
            className="w-20 h-20 rounded-full"
            src="https://fakeimg.pl/300/"
            alt="Rounded avatar"
          />
          <div className="flex-1 mt-4">
            <h1 className="font-bold text-base text-black">Jhon Smith</h1>
            <p className="text-sm text-gray-500">Gold Member</p>
          </div>
        </div>
        <div className="mt-5 ">
          <div>
            <h1 className="font-bold text-gray-500 text-base">INFORMATIONS</h1>
          </div>
          <div className="bg-white mt-5">
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-bold text-base text-black flex-1">Username</p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">createiuux</p>
                <FontAwesome name="angle-right" size={20} color="#c4c4c4" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-bold text-base text-black flex-1">
                Phone Number
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">000-2222-111-333</p>
                <FontAwesome name="angle-right" size={20} color="#c4c4c4" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-bold text-base text-black flex-1">Email</p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">youmail@website.com</p>
                <FontAwesome name="angle-right" size={20} color="#c4c4c4" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-bold text-base text-black flex-1">Gender</p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">Female</p>
                <FontAwesome name="angle-right" size={20} color="#c4c4c4" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-bold text-base text-black flex-1">Birthday</p>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 text-xs">March 10, 1999</p>
                <FontAwesome name="angle-right" size={20} color="#c4c4c4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMobile;
