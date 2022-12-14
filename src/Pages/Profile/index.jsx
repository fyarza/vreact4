import React, { useState } from 'react';
import LayoutAuth from '../Layout/Auth';
import Dashboard from './Tabs/Dashboard';
import PersonalInformation from './Tabs/PersonalInformation';
import Rides from './Tabs/Rides';

function Profile() {
  const [tabs, setTabs] = useState(1);
  return (
    <LayoutAuth>
      <div className="border w-full  md:w-3/4 xl:1/2 px-4">
        <div className="flex space-x-3 items-center mt-10">
          <img
            className="w-20 h-20 rounded-full"
            src="https://fakeimg.pl/300/"
            alt="Rounded avatar"
          />
          <div>
            <h1 className="font-bold text-2xl text-black">Johnson Smith</h1>
            <p className="text-base text-gray-700">ID 1234567890</p>
            <p className="text-base text-gray-700">Edit Profile</p>
          </div>
        </div>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700 mt-10">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => setTabs(1)}
              >
                Dashboard
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
                onClick={() => setTabs(2)}
              >
                Personal Information
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
                onClick={() => setTabs(3)}
              >
                Message
              </button>
            </li>
            <li role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => setTabs(4)}
              >
                Vehicles
              </button>
            </li>
            <li role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => setTabs(5)}
              >
                Drivers
              </button>
            </li>
            <li role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => setTabs(6)}
              >
                Rides
              </button>
            </li>
            <li role="presentation">
              <button
                className="text-gray-700 inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => setTabs(7)}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className={`${
              tabs !== 1 ? 'hidden' : ''
            } p-4  rounded-lg dark:bg-gray-800`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Dashboard />
          </div>
          <div
            className={`${
              tabs !== 2 ? 'hidden' : ''
            } p-4  rounded-lg dark:bg-gray-800`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <PersonalInformation />
          </div>
          <div
            className={`${
              tabs !== 3 ? 'hidden' : ''
            } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`${
              tabs !== 4 ? 'hidden' : ''
            } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`${
              tabs !== 5 ? 'hidden' : ''
            } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`${
              tabs !== 6 ? 'hidden' : ''
            } p-4 rounded-lg dark:bg-gray-800`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <Rides />
          </div>
          <div
            className={`${
              tabs !== 7 ? 'hidden' : ''
            } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}

export default Profile;
