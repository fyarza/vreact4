import React, { useState } from 'react';
import { Feather } from 'react-web-vector-icons';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

function PersonalInformation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [web, setWeb] = useState('');
  const [phone, setPhone] = useState('');
  const [statusmaried, setStatusMaried] = useState('');
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-black">Personal Information</h1>
        <div className="flex items-center space-x-2">
          <Feather name="edit" size={18} color="#c4c4c4" />
          <p className="text-base text-gray-700">Edit</p>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row items-center space-x-2 w-full p-4 mt-5">
          <div className="flex-1">
            <Input
              value={firstName}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              label="Fist Name"
            />

            <Input
              value={email}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              label="Your Name"
            />
            <Input
              value={birthday}
              type="date"
              classNameContainer="my-5 flex-1"
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Your Birthday"
              label="Your Birthday"
            />
            <Input
              value={gender}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setGender(e.target.value)}
              placeholder="Your Gender"
              label="Your Gender"
            />
          </div>
          <div className="flex-1">
            <Input
              value={lastName}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              label="Last Name"
            />
            <Input
              value={web}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setWeb(e.target.value)}
              placeholder="Your Website"
              label="Your Website"
            />
            <Input
              type="number"
              value={phone}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone Number"
              label="Your Phone Number"
            />
            <Input
              value={statusmaried}
              classNameContainer="my-5 flex-1"
              onChange={(e) => setStatusMaried(e.target.value)}
              placeholder="Your Status"
              label="Your Status"
            />
          </div>
        </div>
        <div className="p-4 mt--20">
          <label htmlFor="description" className="text-sm text-gray-500 mb-2">
            Write a litle description about you
          </label>
          <textarea
            className="w-full border border-gray-500 mt-1"
            name="description"
            id="description"
            cols="30"
            rows="5"
            placeholder="Write litle description about you"
          />
          <div className="mt-5 w-20">
            <Button className="w-full py-2 bg-black text-white hover:bg-gray-800">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
