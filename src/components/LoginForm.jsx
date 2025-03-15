import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="max-w-md w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-600">Sign in to continue to RedHope</p>
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email address required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
      >
        {(formik) => (
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {console.log(formik.errors)}
            <div>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />

              {formik.errors.email && (
                <span className="block w-full px-4 py-3 rounded-lg border bg-red-100 border-red-400 text-red-700  mt-2">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
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
            {/* <Link to="/Home"> */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Sign In
            </button>
            {/* </Link> */}
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
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
