import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { RiGoogleFill, RiFacebookFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:5050/api/auth/login', {
        email,
        password,
      });
      // Display success alert
      Swal.fire({
        icon: 'success',
        title: 'Logged In Successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      
      //save token in local storage
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      // Display error alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email or password!',
      });
    }
  };

  return (
    <>
      <div className="login flex justify-center items-center">
        <div className="login__content rounded-lg mt-14 shadow-md p-8 w-full sm:w-96">
          <button className="login__option flex w-full items-center justify-center p-2 border border-black rounded-md mb-4">
            <RiGoogleFill className="mr-2" />
            <h4>Continue with Google</h4>
          </button>

          <button className="login__option flex w-full items-center justify-center p-2 border border-black rounded-md mb-4">
            <RiFacebookFill className="mr-2" />
            <h4>Continue with Facebook</h4>
          </button>

          <form onSubmit={handleSignIn}>
            <div className="login__inputs flex flex-col">
              <input
                type="text"
                placeholder="Email"
                className="mb-2 px-2 py-2 border border-black rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-4 px-2 py-2 border border-black rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-300 text-white font-bold py-2 rounded-md"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="login__text text-center mt-4">
            Don't have an account ?{' '}
            <Link to="/sign-up" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
