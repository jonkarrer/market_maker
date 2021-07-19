interface IRectangle {
  title: string;
  info: string;
  button: string;
  image: string;
}

const Rectangle = ({ title, info, button, image }: IRectangle) => (
  <section>
    <div className="wrapper border space-y-8 p-5 flex flex-col md:flex-row md:space-y-0 lg:p-8">
      <article className="grid gap-3 md:w-2/3">
        <h3 className="text-2xl font-bold lg:text-3xl 3xl:text-4xl">{title}</h3>
        <p>{info}</p>
        <p className="cursor-pointer">{button}</p>
      </article>

      <img className="z-10 flex-1" src={image} alt="rectangle infographic" />
    </div>
  </section>
);

export default Rectangle;
