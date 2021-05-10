import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
import Block from "@/components/support_pages/Block";
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
    <div className="pb-32 w-full max-w-screen-2xl m-auto mt-10 lg:mt-20 grid grid-cols-2">
      <div className=" relative border-r-2 h-1150px border-blue-border border-solid">
        <div className="sm:h-8 sm:w-8 lg:h-10 lg:w-10 bg-blue-border top-0 right-0 absolute transform translate-x-1/2 rounded"></div>
        <div className="sm:h-8 sm:w-8 lg:h-10 lg:w-10 bg-blue-border bottom-0 right-0 absolute transform translate-x-1/2 rounded"></div>
        <div className="h-36 border-blue-border border-solid border-b-1px relative flex items-end sm:ml-6% md:ml-12% lg:ml-20%">
          <Block q="Q2" year="2021" />
        </div>
        <div className="h-80 border-blue-border border-solid border-b-1px relative flex items-end sm:ml-6% md:ml-12% lg:ml-20%">
          <Block q="Q4" year="2021" />
        </div>
        <div className="h-80 border-blue-border border-solid border-b-1px relative flex items-end sm:ml-6% md:ml-12% lg:ml-20%">
          <Block q="Q2" year="2022" />
        </div>
      </div>
      <div className="border-l-2 h-1150px border-blue-border border-solid">
        <div className="h-80 border-blue-border border-solid border-b-1px relative flex items-end justify-end sm:mr-6% md:mr-12% lg:mr-20%">
          <Block q="Q3" year="2021" />
        </div>
        <div className="h-80 border-blue-border border-solid border-b-1px relative flex items-end justify-end sm:mr-6% md:mr-12% lg:mr-20%">
          <Block q="Q1" year="2022" />
        </div>
        <div className="h-80 border-blue-border border-solid border-b-1px relative flex items-end justify-end sm:mr-6% md:mr-12% lg:mr-20%">
          <Block q="Q3" year="2022" />
        </div>
      </div>
    </div>
  </div>
);

export default RoadMap;
