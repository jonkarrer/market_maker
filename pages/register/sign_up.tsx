import Link from "next/link";
const SignUp = () => {
  return (
    <div className="h-screen grid sm:grid-cols-2 place-content-center">
      <div id="home_page-one-gradient" className="h-screen hidden sm:block">
        <img src="/logo.svg" alt="logo" className="m-5 w-16" />
      </div>
      <div className="grid place-content-center">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl py-8 text-center sm:mx-10% md:mx-16% lg:mx-8% xl:mx-0">
          Join Market Maker Lite Today
        </h1>
        <form
          action="Get"
          className="grid space-y-8 text-dk-grey sm:mx-8 xl:mx-0 max-w-screen-lg"
        >
          <div className="flex h-12 lg:h-auto">
            <img
              src="/google.svg"
              alt="google icon"
              className="w-12 lg:w-auto flex justify-center items-center bg-dk-grey px-2"
            />
            <input
              type="text"
              className=" bg-lt-grey h-12 lg:h-16 px-3 font-semibold w-full"
              placeholder="SIGN IN WITH GOOGLE"
            />
          </div>
          <h2 className="text-center">or</h2>
          <input
            type="email"
            placeholder="Email address"
            className="bg-lt-grey h-12 lg:h-16 px-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-lt-grey h-12 lg:h-16 px-3"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-lt-grey h-12 lg:h-16 px-3"
          />
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between items-center">
            <button
              type="submit"
              className="text-white bg-blue-border font-bold w-52 h-12 lg:h-14"
            >
              Sign Up
            </button>
            <Link href="/register/sign_in">
              <h3 className="cursor-pointer">Already a member? Log In</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
