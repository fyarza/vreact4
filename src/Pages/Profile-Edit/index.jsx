import React from 'react';
import { Feather, FontAwesome, FontAwesome5 } from 'react-web-vector-icons';
import Button from '../Components/Button';

function ProfileEdit() {
  return (
    <div className=" px-4 bg-white py-2">
      <div className="flex  items-center justify-between">
        <Feather name="arrow-left" size={20} color="#000" />
        <h1 className="font-bold text-xl text-black flex-1 text-center">
          Edit Profile
        </h1>
        <FontAwesome5 name="user-edit" size={20} color="#000" />
      </div>
      <div className="bg-gray-50 mt-2 p-4 ">
        <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4">
          <div className=" rounded-full relative">
            <img
              className="w-20 h-20 rounded-full"
              src="https://fakeimg.pl/300/"
              alt="Rounded avatar"
            />
            <div className="absolute bottom-0 right-0">
              <FontAwesome name="camera" color="#000" size={20} />
            </div>
          </div>
          <div className="flex-1 mt-4">
            <h1 className="font-bold text-base text-black">Jhon Smith</h1>
            <div className="h-0.5 w-full bg-gray-500 my-2" />
            <p className="text-sm text-gray-500">Gold Member</p>
            <div className="h-0.5 w-full bg-gray-500 mt-2" />
          </div>
        </div>
        <div className="mt-5 ">
          <div className="bg-white">
            <div className="bg-gray-200 flex px-6 py-3 items-center justify-between rounded-full my-2">
              <p className="font-bold text-base text-black">William Jonson</p>
              <FontAwesome name="pencil" color="#c4c4c4" size={15} />
            </div>
            <div className="bg-gray-200 flex px-6 py-3 items-center justify-between rounded-full my-2">
              <p className="font-bold text-base text-black">+880 000 111 333</p>
              <FontAwesome name="pencil" color="#c4c4c4" size={15} />
            </div>
            <div className="bg-gray-200 flex px-6 py-3 items-center justify-between rounded-full my-2">
              <p className="font-bold text-base text-black">
                youremail@website.com
              </p>
              <FontAwesome name="pencil" color="#c4c4c4" size={15} />
            </div>
            <div className="bg-gray-200 flex px-6 py-3 items-center justify-between rounded-full my-2">
              <p className="font-bold text-base text-black">
                Iris Watson P.O.Box 283 8562 Fusce Rd. Frederick Nebraska
              </p>
              <FontAwesome name="pencil" color="#c4c4c4" size={15} />
            </div>

            <div className="mt-5">
              <Button className="w-full py-2 bg-black text-white hover:bg-gray-800 rounded-full">
                Save Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
