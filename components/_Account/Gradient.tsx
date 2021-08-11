interface IGradient {
  email: string | null | undefined;
}
const Gradient = ({ email }: IGradient) => (
  <section className="bg-splash h-64 py-8 md:h-72 2xl:h-96">
    <div className="wrapper h-full flex flex-col justify-end space-y-7">
      <h1 className="font-semibold">Account Settings</h1>
      <button className="w-20 border-none backdrop-filter backdrop-blur-3xl backdrop-contrast-75">
        {email}
      </button>
    </div>
  </section>
);

export default Gradient;
