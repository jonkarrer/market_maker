interface IGradient {
  title: string;
}

const SupportGradient = ({ title }: IGradient) => (
  <div>
    <div
      id="home_page-one-gradient"
      className="text-white font-semibold flex items-center h-25vh sm:min-h-300px sm:h-36vh lg:h-44vh  sm:min"
    >
      <h1 className="mx-auto sm:mb-16 lg:mb-32 text-mobile-h sm:text-6xl">
        {title}
      </h1>
    </div>
  </div>
);

export default SupportGradient;
