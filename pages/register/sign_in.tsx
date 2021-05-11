import React from "react";

const SignIn = () => {
  return (
    <div className="grid grid-cols-2">
      <div id="home_page-one-gradient" className="h-screen"></div>
      <div className="grid place-content-center">
        <h1>Welcome to Market Maker Lite</h1>
        <form action="Get" className="grid">
          <input
            type="text"
            className="bg-gray-200"
            placeholder="SIGN IN WITH GOOGLE"
          />
          <h2 className="text-center text-gray-700">or</h2>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
