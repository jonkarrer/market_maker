import UserIcon from "./UserIcon";
export default function Setting() {
  return (
    <div className="h-full flex items-center space-x-6">
      <img className="w-5" src="/Dashboard/Header/gear.svg" alt="gear icon" />
      <UserIcon />
    </div>
  );
}
