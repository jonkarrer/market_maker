import "../styles/globals.css";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps, router }) {
  let signUp = router.pathname.startsWith("/register/sign_up");
  let signIn = router.pathname.startsWith("/register/sign_in");
  //Remove Navbar
  if (signUp || signIn) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
