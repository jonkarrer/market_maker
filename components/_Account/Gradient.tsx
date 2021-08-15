interface IGradient {
  email: string | null | undefined;
}
const Gradient = ({ email }: IGradient) => (
  <section className="bg-splash h-64 md:h-48 2xl:h-52 text-white">
    <div className="wrapper h-full flex flex-col justify-center space-y-7">
      <h1 className="font-semibold">Account Settings</h1>
      <button className="w-20 border-none backdrop-filter backdrop-blur-3xl backdrop-contrast-75">
        {email}
      </button>
    </div>
  </section>
);

export default Gradient;
