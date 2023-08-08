'use client';

// import { useEffect } from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useState } from 'react';
import signupPng from '@/assets/signup.png';

export default function Account() {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    isTosAccepted: false,
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="w-[1024px] h-[612px] flex bg-white">
        <div
          className="w-[350px] h-[612px]"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${signupPng.src}) no-repeat`,
            backgroundSize: 'cover',
          }}
        ></div>
        <form className="p-16 flex-1">
          <h2 className="text-3xl font-bold mb-6">Create your Free Account</h2>
          <div className="mb-6">
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="text"
              className="mt-2"
              value={state.email}
              onChange={e => setState({ ...state, email: e.target.value })}
            ></TextInput>
          </div>
          <div className="mb-6">
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              className="mt-2"
              value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
            ></TextInput>
          </div>
          <div className="mb-6">
            <Label htmlFor="confirmpassword" value="Confirm Password" />
            <TextInput
              id="confirmpassword"
              type="password"
              className="mt-2"
              value={state.confirmpassword}
              onChange={e => setState({ ...state, confirmpassword: e.target.value })}
            ></TextInput>
          </div>
          <div className="mb-6">
            <Checkbox
              checked={state.isTosAccepted}
              onChange={() => {
                setState({
                  ...state,
                  isTosAccepted: !state.isTosAccepted,
                });
              }}
            />
            <span className="ml-1.5 font-[500]">I accept the Terms and Conditions</span>
          </div>
          <Button className="w-full mb-6" type="submit">
            Create Account
          </Button>
          <div className="mb-6 font-[500]">
            <span className="mr-1">Already have an account?</span>
            <span className="text-primary-700">Login here</span>
          </div>
        </form>
      </div>
    </div>
  );
}
