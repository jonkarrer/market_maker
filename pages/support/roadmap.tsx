import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";

const RoadMap = () => (
  <div>
    <Gradient title="Roadmap" />
    <Wrapper display="grid">
      <div className="flex flex-col space-y-10 lg:space-y-14 w-full mx-3">
        <h1 className="text-center font-semibold text-mobile-h sm:text-3xl lg:text-5xl">
          Hover over each quarter to learn
          <h1 className="lg:mt-2">more about our goals</h1>
        </h1>
      </div>
    </Wrapper>
    <div className="bg-blue-400 h-1000px w-full mt-12"></div>
  </div>
);

export default RoadMap;
