interface IGradient {
  title: string;
}

const SupportGradient = ({ title }: IGradient) => (
  <div>
    <div
      id="home_page-one-gradient"
      className="text-white font-semibold flex items-center h-25vh sm:h-43vh sm:min-h-gradient"
    >
      <h1 className="mx-auto mt-7 sm:mb-24 text-mobile-h sm:text-6xl">
        {title}
      </h1>
    </div>
  </div>
);

export default SupportGradient;
