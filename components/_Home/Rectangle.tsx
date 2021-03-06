interface IRectangle {
  title: string;
  info: string;
  button: string;
  image: string;
}

const Rectangle = ({ title, info, button, image }: IRectangle) => (
  <section>
    <div className="wrapper border space-y-8 p-5 flex flex-col md:items-center md:flex-row md:space-y-0 lg:p-8">
      <article className="grid gap-5 md:gap-6 md:mr-3 2xl:gap-8 3xl:gap-12">
        <h3>{title}</h3>
        <p>{info}</p>
        <p className="cursor-pointer">{button}</p>
      </article>

      <img
        className="lg:h-64 2xl:h-100 2xl:w-200"
        src={image}
        alt="rectangle infographic"
      />
    </div>
  </section>
);

export default Rectangle;
