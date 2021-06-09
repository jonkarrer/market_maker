import Footer from "./Footer";
import Nav from "./Nav";

export interface IChildren {
  children: React.ReactNode;
}
function Layout({ children }: IChildren) {
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
