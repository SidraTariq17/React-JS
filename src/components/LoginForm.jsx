import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <div className="max-w-md w-full">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
      <p className="text-gray-600">Sign in to continue to LifeShare</p>
    </div>

    <form className="space-y-6">
      <div>
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="text-red-600 hover:text-red-500">
          Forgot password?
        </a>
      </div>

      <Link to="/Home">
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Sign In
        </button>
      </Link>

      <div className="text-center">
        <span className="text-gray-600">Don't have an account? </span>
        <Link
          to="/Register"
          className="text-red-600 font-semibold hover:text-red-700"
        >
          Register here
        </Link>
      </div>
    </form>
  </div>
);

export default LoginForm;
