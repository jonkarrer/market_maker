export default function Search() {
  return (
    <div className="hidden h-full lg:flex items-center">
      <div className="backdrop-filter backdrop-blur-3xl backdrop-contrast-75 flex items-center py-1 rounded">
        <img
          className="mx-3 w-3 xl:w-4 2xl:w-5"
          src="/Dashboard/Header/spyglass.svg"
          alt="spyglass icon"
        />
        <input
          className="border-none bg-transparent text-sm xl:text-base 2xl:text-lg text-white placeholder-white outline-none w-60 xl:w-72 2xl:w-85"
          type="text"
          name="search"
          id="search"
          placeholder="Search Companies..."
        />
      </div>
    </div>
  );
}
