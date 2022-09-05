import React from 'react';
import { Feather } from 'react-web-vector-icons';
import LayoutAuth from '../Layout/Auth';

function FUECList() {
  return (
    <LayoutAuth>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-black font-bold text-xl text-center">
          Listado FUEC
        </h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Numero
              </th>
              <th scope="col" className="py-3 px-6">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-green-500 justify-center items-center flex ">
                    <Feather name="eye" color="#fff" size={15} />
                  </div>
                  <p> Apple MacBook Pro 17</p>
                </div>
              </th>
              <td className="py-4 px-6">Sliver</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-green-500 justify-center items-center flex ">
                    <Feather name="eye" color="#fff" size={15} />
                  </div>
                  <p> Microsoft Surface Pro</p>
                </div>
              </th>
              <td className="py-4 px-6">White</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-green-500 justify-center items-center flex ">
                    <Feather name="eye" color="#fff" size={15} />
                  </div>
                  <p> Magic Mouse 2</p>
                </div>
              </th>
              <td className="py-4 px-6">Black</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutAuth>
  );
}

export default FUECList;
