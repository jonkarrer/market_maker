import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
const Pricing = () => (
  <div>
    <Gradient title="Pricing" />
    <Wrapper display="grid">
      <div className="grid gap-4 lg:gap-12 place-content-center w-full">
        <h1 className="text-center font-bold text-mobile-h py-8 sm:py-0 sm:text-4xl lg:text-5xl ">
          Compare Plans
        </h1>
        <div className="flex justify-center items-center shadow-supp-boxes rounded-full h-12 w">
          <div className="xl:w-96 h-full rounded-full flex justify-center items-center text-white bg-blue-border">
            Monthly
          </div>
          <div className="xl:w-96 rounded-full flex justify-center">Annual</div>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Pricing;
