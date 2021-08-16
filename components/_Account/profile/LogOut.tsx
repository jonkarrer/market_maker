import Link from "next/link";

const LogOut = () => {
  return (
    <Link href="/api/auth/logout">
      <button className="h-12 w-auto flex items-center justify-center md:w-44 bg-gray-500 text-white">
        Log Out
      </button>
    </Link>
  );
};

export default LogOut;
