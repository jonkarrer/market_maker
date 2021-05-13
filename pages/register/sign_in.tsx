import Link from "next/link";
const SignIn = () => {
  return (
    <div className="h-screen grid sm:grid-cols-2 place-content-center">
      {/** Left Panel */}
      <div id="home_page-one-gradient" className="h-screen hidden sm:block">
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="m-5 w-16 cursor-pointer" />
        </Link>
      </div>
      {/** Right Panel */}
      <div className="grid place-content-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl py-8 text-center sm:mx-15% xl:mx-0">
          Welcome to Market Maker Lite
        </h1>
        <form
          action="Get"
          className="grid space-y-8 text-dk-grey sm:mx-8 xl:mx-0"
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
          <Link href="/forgot">
            <a className="text-blue-border font-bold">Forgot your password?</a>
          </Link>
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between items-center">
            <button
              type="submit"
              className="text-white bg-blue-border font-bold w-52 h-12 lg:h-14"
            >
              Sign In
            </button>
            <Link href="/register/sign_up">
              <h3 className="cursor-pointer">Not a member? Sign Up</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
