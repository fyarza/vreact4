import React from 'react';
import { Feather, FontAwesome } from 'react-web-vector-icons';

function NotificationsMobile() {
  return (
    <div className=" px-4 bg-white py-2">
      <div className="flex  items-center justify-between">
        <Feather name="arrow-left" size={20} color="#000" />
        <h1 className="font-bold text-xl text-[#1c2244] flex-1 text-center">
          Notification
        </h1>
      </div>

      <div className="bg-[#f3f3fb] mt-2 p-4 ">
        <div className="bg-white rounded-xl flex items-center space-x-4 p-2 ">
          <div className="w-14 h-14 rounded-full bg-[#f82b6b] flex items-center justify-center">
            <Feather name="x-circle" size={30} color="#FFF" />
          </div>
          <div>
            <p className="font-bold text-base text-black">Booking Cancel</p>
            <p className="text-sm text-black font-semibold">
              Booking #107 has been cancelled
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex items-center space-x-4 p-2 mt-5 ">
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
            <Feather name="credit-card" size={30} color="#FFF" />
          </div>
          <div>
            <p className="font-bold text-base text-black">Payment</p>
            <p className="text-sm text-black font-semibold">
              Thank you! Your transaction is com...
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex items-center space-x-4 p-2 mt-5 ">
          <div className="w-14 h-14 rounded-full bg-[#34b889] flex items-center justify-center">
            <FontAwesome name="ticket" size={30} color="#FFF" />
          </div>
          <div>
            <p className="font-bold text-base text-black">Promotion</p>
            <p className="text-sm text-black font-semibold">
              Invite frinds - Get 1 coupons each!
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex items-center space-x-4 p-2 mt-5 ">
          <div className="w-14 h-14 rounded-full bg-[#3f52fe] flex items-center justify-center">
            <FontAwesome name="check-circle" size={30} color="#FFF" />
          </div>
          <div>
            <p className="font-bold text-base text-black">Booking Accept</p>
            <p className="text-sm text-black font-semibold">
              Booking #1234 has been success...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsMobile;
