import React from 'react'
import { Link } from 'react-router-dom'

import { RiGoogleFill, RiFacebookFill } from 'react-icons/ri'
export default function SignIn() {
  return (
    <>
      
      <div className="login flex justify-center items-center ">
        <div className="login__content rounded-lg mt-14 shadow-md p-8 w-full sm:w-96">
          <button className="login__option flex w-full items-center justify-center p-2 border border-black rounded-md mb-4">
            <RiGoogleFill className="mr-2" />
            <h4>Continue with Google</h4>
          </button>

          <button className="login__option flex w-full items-center justify-center p-2 border border-black rounded-md mb-4">
            <RiFacebookFill className="mr-2" />
            <h4>Continue with Facebook</h4>
          </button>

          <div className="login__inputs flex flex-col">
            <input
              type="text"
              placeholder="Email"
              className="mb-2 px-2 py-2 border border-black rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 px-2 py-2 border border-black rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-300 text-white font-bold py-2 rounded-md"
            >
              Log In
            </button>
          </div>
          <div className="login__text text-center mt-4">
            Don't have an account ? <Link to="/sign-up" className='text-blue-500 font-semibold'>Sign up</Link>
          </div>
        </div>
      </div>
      
    </>
  );
}
