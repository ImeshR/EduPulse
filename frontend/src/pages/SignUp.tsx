import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiGoogleFill, RiFacebookFill } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Signup Logic
    console.log("Signup Details:", { email, password, firstName, lastName, role });
    try {
      const response = await axios.post("http://localhost:7073/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        role,
      });

      console.log("Signup Response:", response);

      if (response.status === 201) {
        //sweet alert
        Swal.fire({
          title: "Account Created",
          text: "Your account has been created successfully!",
          icon: "success",
          confirmButtonText: "Continue",
        });

        // Redirect to login page
        navigate("/sign-in");

      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Signup Error:", error);
      //sweetalert2 alert
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }

  };

  return (
    <>
      <div className="login flex justify-center items-center ">
        <div className="login__content items-center justify-center rounded-lg mt-14 shadow-md p-8 w-full sm:w-96">
          <p className="text-center text-blue-500 font-bold text-xl mb-8">Sign Up and Start Learning!</p>
          <button className="login__option flex w-full items-center justify-center p-2 border border-black rounded-md mb-4">
            <RiGoogleFill className="mr-2" />
            <h4>Continue with Google</h4>
          </button>
          <button className="login__option flex w-full items-center justify-center p-2 border border-black rounded-md mb-4">
            <RiFacebookFill className="mr-2" />
            <h4>Continue with Facebook</h4>
          </button>
          <form onSubmit={handleSignUp}>
            <div className="login__inputs flex flex-col">
              <select
                className="mb-2 px-2 py-2 border border-black rounded-md"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="user">Student</option>
                <option value="creator">Creator</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="mb-2 px-2 py-2 border border-black rounded-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mb-2 px-2 py-2 border border-black rounded-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

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
                Sign Up
              </button>
            </div>
          </form>
          <div className="login__text text-center mt-4">
            Already have an account? <Link to="/sign-in" className='text-blue-500 font-semibold'>Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
