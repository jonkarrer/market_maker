import React from "react";

const SignIn = () => {
  return (
    <div className="grid grid-cols-2">
      <div id="home_page-one-gradient" className="h-screen"></div>
      <div className="grid place-content-center">
        <h1 className="text-3xl py-8">Welcome to Market Maker Lite</h1>
        <form action="Get" className="grid space-y-8 text-dk-grey">
          <input
            type="text"
            className=" bg-lt-grey h-16 px-3 font-semibold"
            placeholder="SIGN IN WITH GOOGLE"
          />
          <h2 className="text-center">or</h2>
          <input
            type="email"
            placeholder="Email address"
            className="bg-lt-grey h-16 px-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-lt-grey h-16 px-3"
          />
          <a className="text-blue-border font-bold">Forgot your password?</a>
          <div className="flex justify-between items-center">
            <button className="text-white bg-blue-border font-bold w-52 h-14">
              Sign In
            </button>
            <h3>Not a member? Sign Up</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
