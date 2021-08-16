import React from "react";

export default function Profile() {
  return (
    <div className="grid gap-10 w-full lg:gap-20">
      <h2>Profile</h2>
      <Username />
      <Avatar />
      <Discord />
      <Code />
    </div>
  );
}

const Username = () => (
  <Container name="Username">
    <div className="flex items-center bg-gray-300 h-12 justify-between pl-3 md:w-80 rounded 2xl:w-96">
      <p className="bg-gray-300 text-black">Username</p>
      <span className="bg-white dark:bg-dark h-full flex items-center px-3">
        <p>Edit</p>
      </span>
    </div>
  </Container>
);
const Avatar = () => (
  <Container name="Change Avatar">
    <img className="bg-blue-400 h-24 w-24 rounded-full" src="" alt="avatar" />
  </Container>
);
const Discord = () => (
  <Container name="Discord">
    <div className="flex items-center justify-between w-40 bg-blue-500 py-2 px-3 rounded 2xl:w-48">
      <p className="min-w-max">Link Discord</p>
      <img
        className="w-7"
        src="/assets/Social/discord_lt.svg"
        alt="discord icon"
      />
    </div>
  </Container>
);
const Code = () => (
  <Container name="Your Unique Code">
    <div className="flex items-center bg-gray-300 h-12 justify-between pl-3 md:w-80 rounded 2xl:w-96">
      <p className="bg-gray-300 text-black">xxxxxxxxxxxxxxxx</p>
      <span className="bg-white dark:bg-dark h-full flex items-center px-3">
        <img src="/Account/copy.svg" alt="copy icon" />
      </span>
    </div>
  </Container>
);

const Container = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => (
  <div className="grid gap-6 lg:grid-cols-2 lg:w-2/3">
    <h6 className="self-center min-w-max">{name}:</h6> {children}
  </div>
);
