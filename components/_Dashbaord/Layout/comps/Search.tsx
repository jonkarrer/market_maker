export default function Search() {
  return (
    <div className="h-full flex items-center">
      <div className="backdrop-filter backdrop-blur-3xl backdrop-contrast-75 flex items-center py-1 rounded">
        <img
          className="mx-3 w-4"
          src="/Dashboard/Header/spyglass.svg"
          alt="spyglass icon"
        />
        <input
          className="border-none bg-transparent text-sm text-white placeholder-white outline-none w-72"
          type="text"
          name="search"
          id="search"
          placeholder="Search Companies..."
        />
      </div>
    </div>
  );
}
