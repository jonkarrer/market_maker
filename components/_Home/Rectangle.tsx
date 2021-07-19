interface IRectangle {
  title: string;
  info: string;
  button: string;
  image: string;
}

const Rectangle = ({ title, info, button, image }: IRectangle) => (
  <section>
    <div className="wrapper border space-y-8 p-5 flex flex-col items-center md:flex-row md:space-y-0 lg:p-8">
      <article className="grid gap-3 md:gap-4 2xl:gap-6">
        <h4>{title}</h4>
        <p>{info}</p>
        <p className="cursor-pointer">{button}</p>
      </article>
      <img
        className="z-10 2xl:w-190 3xl:w-220"
        src={image}
        alt="rectangle infographic"
      />
    </div>
  </section>
);

export default Rectangle;
