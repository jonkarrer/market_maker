import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
const Contact = () => (
  <div>
    <Gradient title="Contact" />
    <Wrapper display="flex">
      <div className="shadow-supp-boxes rounded-xl flex flex-col space-y-10 lg:space-y-14 w-full mx-5 my-10 sm:my-0 sm:mb-10 sm:mx-std">
        <h1 className="text-center font-semibold text-mobile-h pt-8 sm:pt-6 sm:text-4xl lg:text-6xl">
          How can we help?
        </h1>
        <form action="Get" className="grid gap-3 mx-10 text-gray-500 pb-10">
          <label htmlFor="email address">Your email address:</label>
          <input
            type="email"
            className=" border-gray-300 border-solid border-1px h-9 rounded outline-none px-3"
          />
          <label htmlFor="subject" className="pt-3">
            Subject
          </label>
          <input
            type="text"
            className="border-gray-300 border-solid border-1px h-9 rounded outline-none px-3"
          />
          <label htmlFor="subject" className="pt-3">
            Details
          </label>
          <textarea className="border-gray-300 border-solid border-1px h-40 rounded outline-none resize-none px-3" />
          <button className="h-10 w-80 bg-blue-border m-auto text-white font-bold mt-16 rounded">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  </div>
);

export default Contact;
