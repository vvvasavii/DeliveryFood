// src/pages/SignUp.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8] dark:bg-[#1C1A27]">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#83122A] dark:text-white">Create Account</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded border focus:outline-none" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded border focus:outline-none" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded border focus:outline-none" />
          <button type="submit" className="w-full bg-[#83122A] hover:bg-orange-600 text-white py-2 rounded font-medium transition">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-orange-500 hover:underline">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
