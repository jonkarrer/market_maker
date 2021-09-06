import UserIcon from "./UserIcon";
export default function Setting() {
  return (
    <div className="h-full flex items-center space-x-8 lg:space-x-6">
      <img
        className="w-6 lg:w-5 xl:w-6 2xl:w-7"
        src="/Dashboard/Header/gear.svg"
        alt="gear icon"
      />
      <UserIcon />
    </div>
  );
}
