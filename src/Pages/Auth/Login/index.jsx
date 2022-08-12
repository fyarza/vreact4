import React, { useState } from 'react';
import Button from '../../Components/Button';
import Checkbox from '../../Components/Checkbox';
import Input from '../../Components/Input';
import TabAuth from '../../Components/TabAuth';
import LayoutAuth from '../../Layout/Auth';
import { Feather, AntDesign } from 'react-web-vector-icons';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setactiveRight] = useState(true);
  return (
    <LayoutAuth>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-black font-bold text-xl text-center">
          Please Sign in
        </h1>

        <TabAuth
          textLeft="Rider"
          textRight="Driver"
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
            <div>
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
                Don't have an account?{' '}
                <a className="font-bold ">
                  <Link to="/register">Sign up</Link>
                </a>{' '}
                {'>>'}
              </p>
            </div>
            <div className="flex justify-between items-center space-x-2">
              <Button className="w-1/2 py-2 bg-[#3b5a9a] text-white">
                <div className="flex space-x-2 justify-center items-center">
                  <Feather name="facebook" color="white" size={15} />
                  <p className="md:text-base text-sm">Sign in with Facebook</p>
                </div>
              </Button>
              <Button className="w-1/2 py-2 bg-[#d84537] text-white">
                <div className="flex space-x-2 justify-center items-center">
                  <AntDesign name="google" color="white" size={15} />
                  <p className="md:text-base text-sm"> Sign in with Google</p>
                </div>
              </Button>
            </div>
          </>
        )}
        {activeRight && (
          <>
            <div>
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
          </>
        )}
      </div>
    </LayoutAuth>
  );
}

export default Login;
