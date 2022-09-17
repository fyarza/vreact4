import React from 'react';
import { Feather } from 'react-web-vector-icons';

function PaymentMethodMobile() {
  return (
    <div className=" px-4 bg-white py-2">
      <div className="flex  items-center justify-between">
        <Feather name="arrow-left" size={20} color="#000" />
        <h1 className="font-bold text-xl text-[#1c2244] flex-1 text-center">
          Payment Method
        </h1>
      </div>

      <div className="bg-[#f3f3fb] mt-2 p-4 ">
        <div className="flex items-center justify-center my-10">
          <div className="w-20 h-20 rounded-full bg-[#35b686]  flex items-center justify-center">
            <Feather name="check" size={30} color="#FFF" />
          </div>
        </div>
        <div className="bg-white rounded-b-xl p-4">
          <p className="font-bold text-lg text-black text-center">
            Payment Success
          </p>
          <p className="text-red-800 font-semibold text-center text-base mt-2">
            Tip ID # 125050
          </p>
          <p className="text-base text-center font-semibold mt-1">
            Thank you for choosing our service and trusted Ride to help you with
            your problems
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <a
          href="#"
          className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-gray-300 font-bold rounded-full text-base px-10 py-4 mr-2 mb-2 dark:bg-black dark:hover:bg-black focus:outline-none dark:focus:ring-gray-800 flex items-center justify-center"
        >
          Leave a Review
        </a>
        <a
          href="#"
          className="text-white bg-[#5b211f] hover:bg-[#5b211f] focus:ring-4 focus:ring-gray-300 font-bold rounded-full text-base px-10 py-4 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 flex items-center justify-center"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default PaymentMethodMobile;
