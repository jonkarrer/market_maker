import Gradient from "@/components/_Support/Gradient";
import Menu from "@/components/_Support/Terms/Menu";
import Conditions from "@/components/_Support/Terms/Conditions";

const Terms = () => (
  <main>
    <Gradient pageName="Terms & Conditions" />
    <section>
      <div className="wrapper flex">
        <Menu />
        <Conditions />
      </div>
    </section>
  </main>
);

export default Terms;
