import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] flex justify-center pt-36  ">
      <div className="w-[500px] h-[500px] bg-white/70 p-10 rounded-lg shadow-xl backdrop-blur mt-10 ">

        <h2 className="text-3xl font-semibold mb-2">Login</h2>
        <p className="text-gray-700 mb-8">
          Enter your credentials to login to your account
        </p>

        {/* Username */}
        <label className="block font-medium mb-1">UserName</label>
        <input
          type="text"
          className="w-full bg-gray-200 px-4 py-2 mb-4 rounded outline-none border border-gray-400"
        />

        {/* Password */}
        <label className="block font-medium mb-1">Password</label>
        <div className="flex items-center bg-gray-200 px-4 py-2 mb-2 rounded border border-gray-400">
          <input
            type="password"
            className="w-full bg-transparent outline-none"
          />
          <span className="text-gray-500">🔒</span>
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold">
          Sign In
        </button>

        {/* Sign up */}
        <p className="mt-5 text-left text-gray-700">
          Don’t have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
