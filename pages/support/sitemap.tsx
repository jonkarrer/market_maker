import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
import List from "@/components/support_pages/List";

const Sitemap = () => (
  <div className="pb-8 h-screen sm:min-h-800px">
    <Gradient title="Sitemap" />
    <Wrapper display="flex">
      <div className="grid gap-10 lg:gap-16 place-content-center w-full">
        <h1 className="text-center font-bold text-mobile-h py-8 sm:pt-6 sm:text-4xl lg:text-5xl ">
          Explore Market Maker Lite
        </h1>
        <div className="space-y-16 sm:space-y-0 sm:flex sm:justify-between items-start">
          <List title="Home">
            <li>About Us</li>
            <li>Learn</li>
            <li>Pricing</li>
            <li>Dashboard</li>
          </List>
          <List title="Products">
            <li>Stocks</li>
            <li>Options</li>
            <li>Crypto</li>
          </List>
          <List title="Legal">
            <li>Not Financial Advice </li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Payment Terms</li>
            <li>Disclosures</li>
          </List>
          <List title="Support">
            <li>Contact</li>
            <li>Roadmap</li>
          </List>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Sitemap;
