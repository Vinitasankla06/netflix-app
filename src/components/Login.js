// rafce
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignFrom] = useState(true);
  const toggleSignInForm = () => {
    setIsSignFrom(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="mx-2 font-bold text-3xl py-4 text-white ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="rounded p-4 my-4 w-full bg-neutral-500	text-white text-xl"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="rounded p-4 my-4 w-full bg-neutral-500	text-white text-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded p-4 my-4 w-full bg-neutral-500 text-white"
        />
        <button className="rounded p-4 my-8 bg-red-600 w-full text-white text-xl font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="py-4 text-white font-bold cursor-pointer"
        >
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
