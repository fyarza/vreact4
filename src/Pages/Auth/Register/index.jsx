import React, { useState } from 'react';
import Button from '../../Components/Button';
import Checkbox from '../../Components/Checkbox';
import Input from '../../Components/Input';
import TabAuth from '../../Components/TabAuth';
import LayoutAuth from '../../Layout/Auth';
import { Feather, AntDesign } from 'react-web-vector-icons';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [code, setCode] = useState('');
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setactiveRight] = useState(true);
  return (
    <LayoutAuth>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-black font-bold text-xl text-center">
          Please Sign up
        </h1>

        <TabAuth
          textLeft="Sign up to Ride"
          textRight="Sign up to Drive"
          activeLeft={activeLeft}
          activeRight={activeRight}
          onClickLeft={() => {
            setActiveLeft(true);
            setactiveRight(false);
          }}
          onClickRight={() => {
            setActiveLeft(false);
            setactiveRight(true);
          }}
        />
        {activeLeft && (
          <>
            <div className="flex space-x-2 items-center">
              <Input
                value={firstName}
                classNameContainer="my-5 flex-1"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <Input
                value={lastName}
                classNameContainer="my-5 flex-1"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <div>
              <Input
                value={phone}
                classNameContainer="my-5"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
              <Input
                value={email}
                classNameContainer="my-5"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
              <Input
                value={password}
                classNameContainer="my-5"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Checkbox className="my-5" title="Remember me" />
            </div>
            <div>
              <Button className="w-full py-2 bg-black text-white hover:bg-gray-800">
                Sign in
              </Button>
            </div>
            <div className="my-5">
              <p className="text-base text-black">
                Already have an account?{' '}
                <a className="font-bold ">
                  <Link to="/login">Sign in</Link>
                </a>{' '}
                {'>>'}
              </p>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-1/2 py-2 bg-[#3b5a9a] text-white">
                <div className="flex space-x-2 justify-center items-center">
                  <Feather name="facebook" color="white" size={15} />
                  <p className="md:text-base text-sm">Sign up with Facebook</p>
                </div>
              </Button>
              <Button className="w-1/2 py-2 bg-[#d84537] text-white">
                <div className="flex space-x-2 justify-center items-center">
                  <AntDesign name="google" color="white" size={15} />
                  <p className="md:text-base text-sm"> Sign up with Google</p>
                </div>
              </Button>
            </div>
          </>
        )}
        {activeRight && (
          <>
            <div className="flex space-x-2 items-center">
              <Input
                value={firstName}
                classNameContainer="my-5 flex-1"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <Input
                value={lastName}
                classNameContainer="my-5 flex-1"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <div>
              <Input
                value={phone}
                classNameContainer="my-5"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
              <Input
                value={email}
                classNameContainer="my-5"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
              <Input
                value={password}
                classNameContainer="my-5"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Input
                value={city}
                classNameContainer="my-5"
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
              <Input
                value={code}
                classNameContainer="my-5"
                onChange={(e) => setCode(e.target.value)}
                placeholder="Invite Code"
              />
            </div>
            <div>
              <Button className="w-full py-2 bg-black text-white hover:bg-gray-800">
                Sign Up
              </Button>
            </div>
          </>
        )}
      </div>
    </LayoutAuth>
  );
}

export default Register;
