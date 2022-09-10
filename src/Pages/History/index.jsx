import React, { useState } from 'react';
import { Feather } from 'react-web-vector-icons';
import CancelledList from './CancelledList';
import CompleteList from './CompleteList';
import UpcomingList from './UpcomingList';

function History() {
  const [tab, setTab] = useState(1);
  return (
    <div className=" px-4 bg-white py-2">
      <div className="flex  items-center justify-between">
        <Feather name="arrow-left" size={20} color="#000" />
        <h1 className="font-bold text-xl text-[#1c2244] flex-1 text-center">
          History
        </h1>
      </div>
      <div className="bg-gray-50 mt-2 p-4 ">
        <div className="flex items-center justify-between mb-5">
          <a
            href="#"
            onClick={() => setTab(1)}
            className={`text-base ${
              tab === 1 ? 'text-[#37b589]' : 'text-[#1c2244]'
            } font-bold hover:underline`}
          >
            Complete
          </a>
          <div className="h-4 w-0.5 bg-black" />
          <a
            href="#"
            onClick={() => setTab(2)}
            className={`text-base ${
              tab === 2 ? 'text-[#37b589]' : 'text-[#1c2244]'
            } font-bold hover:underline`}
          >
            Upcoming
          </a>

          <div className="h-4 w-0.5 bg-[#1c2244]" />
          <a
            href="#"
            onClick={() => setTab(3)}
            className={`text-base ${
              tab === 3 ? 'text-[#37b589]' : 'text-[#1c2244]'
            } font-bold hover:underline`}
          >
            Cancelled
          </a>
        </div>
        {tab === 1 && <CompleteList />}
        {tab === 2 && <UpcomingList />}
        {tab === 3 && <CancelledList />}
      </div>
    </div>
  );
}

export default History;
