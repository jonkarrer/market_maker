interface IGradient {
  email: string | null | undefined;
}
const Gradient = ({ email }: IGradient) => (
  <div
    id="home_page-one-gradient"
    className="text-black font-semibold flex flex-col justify-end items-start h-48 sm:h-72"
  >
    <h1 className="mx-4 sm:mx-std mb-3 sm:mb-6 text-3xl sm:text-5xl">
      Account Settings
    </h1>
    <button className="btn mx-4 sm:mx-std font-normal text-black mb-5 sm:mb-10 text-xs sm:text-base 2xl:text-xl sm:px-4 sm:py-2 hover:bg-btn-hover">
      {email}
    </button>
  </div>
);

export default Gradient;
