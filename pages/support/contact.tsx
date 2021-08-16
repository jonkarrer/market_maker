import Gradient from "@/components/_Support/Gradient";

export default function Contact() {
  return (
    <main>
      <Gradient pageName="Contact Us" />
      <section>
        <div className="wrapper space-y-10 md:space-y-12 lg:max-w-5xl 2xl:max-w-6xl">
          <h2 className="font-medium text-center text-4xl lg:text-5xl 2xl:text-6xl">
            How can we help?
          </h2>
          <form
            action=""
            className="grid gap-12 text-lg md:text-xl 2xl:text-2xl dark:text-white"
          >
            <label htmlFor="" className="space-y-3">
              <p>Your email address:</p>
              <input
                className="border outline-none w-full p-1 dark:bg-offBlack dark:border-none"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <p>Subject:</p>
              <input
                className="border outline-none w-full p-1 dark:bg-offBlack dark:border-none"
                type="text"
                name=""
                id=""
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <p>Details:</p>
              <textarea
                className="border outline-none w-full p-1 h-32 md:h-40 dark:bg-offBlack dark:border-none"
                name=""
                id=""
              ></textarea>
            </label>
            <button className="text-white bg-splash w-full md:w-44 lg:w-52 shadow-xl dark:border-none">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
