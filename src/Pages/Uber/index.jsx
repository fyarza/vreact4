import React from 'react';
import Button from '../Components/Button';
import Map from './Map';

function Uber() {
  return (
    <div>
      <Map />
      <div className="px-4 flex items-center space-x-20 mt-5">
        <div>
          <h1 className="font-bold text-black mb-4">Special</h1>
          <div className="flex flex-row items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://fakeimg.pl/300/"
              alt="Rounded avatar"
            />
            <div className="ml-2">
              <p className="font-bold text-base text-black">Taxi</p>
              <p className="text-base text-gray-600">$50</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-black mb-4">Economy</h1>
          <div className="flex flex-row items-center  space-x-3">
            <div className="flex flex-row items-center">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://fakeimg.pl/300/"
                  alt="Rounded avatar"
                />
                <div className="absolute bottom-0 h-5 w-12 flex items-center justify-center bg-black rounded-full">
                  <p className="text-white text-xs">5 mins</p>
                </div>
              </div>
              <div className="ml-2">
                <p className="font-bold text-base text-black">UberGo</p>
                <p className="text-base text-gray-600">$100.83</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-black rounded-full opacity-50">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://fakeimg.pl/300/"
                  alt="Rounded avatar"
                />
              </div>
              <div className="ml-2">
                <p className="font-bold text-base text-black">Premier</p>
                <p className="text-base text-gray-600">$148.77</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-black mb-4">Premium</h1>
          <div className="flex flex-row items-center  space-x-3">
            <div className="flex flex-row items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://fakeimg.pl/300/"
                alt="Rounded avatar"
              />

              <div className="ml-2">
                <p className="font-bold text-base text-black">UberXL</p>
                <p className="text-base text-gray-600">$205.00</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-black rounded-full opacity-50">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://fakeimg.pl/300/"
                  alt="Rounded avatar"
                />
              </div>
              <div className="ml-2">
                <p className="font-bold text-base text-black">Black</p>
                <p className="text-base text-gray-600">$215.00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-black mb-4">More</h1>
          <div className="flex flex-row items-center  space-x-3">
            <div className="flex flex-row items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://fakeimg.pl/300/"
                alt="Rounded avatar"
              />

              <div className="ml-2">
                <p className="font-bold text-base text-black">Hire Go</p>
                <p className="text-base text-gray-600">$251-302</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-black rounded-full opacity-50">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://fakeimg.pl/300/"
                  alt="Rounded avatar"
                />
              </div>
              <div className="ml-2">
                <p className="font-bold text-base text-black">Hire Premier</p>
                <p className="text-base text-gray-600">$303-304</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button className="w-full py-2 bg-black text-white hover:bg-gray-800">
          CONFIRM UBERGO
        </Button>
      </div>
    </div>
  );
}

export default Uber;
