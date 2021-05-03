import Link from "next/link";
export default function Support() {
  return (
    <div className="h-screen w-screen">
      <header className="hidden w-5/6 sm:py-2 sm:flex items-center justify-between top-3 mx-std z-10 text-black">
        <nav id="links" className="flex items-center justify-start">
          <Link href="/">
            <a className="mr-9" href="#">
              <img
                className="w-10 min-w-full bg-black"
                src="./assets/logo.svg"
                alt=""
              />
            </a>
          </Link>
          <Link href="/products">
            <a className="mr-9" href="">
              Products
            </a>
          </Link>
          <Link href="/learn">
            <a className="mr-9">Learn</a>
          </Link>
          <Link href="/support">
            <a>Support</a>
          </Link>
        </nav>
        <nav id="sign-up" className="flex items-center justify-end w-1/2">
          <Link href="/sign-in">
            <a className="mr-10">Sign In</a>
          </Link>
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </nav>
      </header>
      <div className="text-white font-semibold bg-gradient-to-r from-hot-pink to-lt-blue">
        <h1 className="mx-std">Support</h1>
      </div>
    </div>
  );
}
