import React, { Children } from "react";

export default function Profile() {
  return (
    <div className="grid gap-10">
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
    <div className="flex items-center bg-gray-300 h-12 justify-between pl-3">
      <p className="bg-gray-300">Username</p>
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
    <div className="flex items-center justify-between w-40 bg-blue-500 py-2 px-3">
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
    <div className="flex items-center bg-gray-300 h-12 justify-between pl-3">
      <p className="bg-gray-300">xxxxxxxxxxxxxxxx</p>
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
  <div className="grid gap-6">
    <h6>{name}:</h6> {children}
  </div>
);
