import Footer from "./Footer";
import Nav from "./Nav";

interface ILayout {
  children: React.ReactNode;
}
function Layout({ children }: ILayout) {
  return (
    <>
      <Nav />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
