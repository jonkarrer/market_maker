import Footer from "./Footer";
import Header from "./Header";

export interface IChildren {
  children: React.ReactNode;
}
function Layout({ children }: IChildren) {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
