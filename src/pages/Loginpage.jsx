import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-[calc(100vh-64px)] flex justify-center items-start pt-16"
      style={{
        background: "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="bg-white w-[90%] max-w-[520px] rounded-lg shadow-lg px-10 py-8">
        {/* Heading */}
        <h1 className="text-3xl font-semibold mb-1">Login</h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter your credentials to login to your account
        </p>

        {/* Email */}
        <label className="block text-sm font-semibold mb-1">Email</label>
        <input
          type="email"
          className="w-full mb-4 px-4 py-2 rounded-md bg-[#E9E9E9] text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <label className="block text-sm font-semibold mb-1">Password</label>
        <div className="relative mb-3">
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md bg-[#E9E9E9] text-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-end mb-5">
          <button className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Sign In button */}
        <button className="w-full bg-[#1967FF] hover:bg-[#1557d6] text-white py-3 rounded-md font-semibold text-lg mb-4 transition">
          Sign In
        </button>

        <p className="text-sm text-gray-700 text-center">
          Don’t have an account?{" "}
          <Link to="/sign-up-hospital" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
