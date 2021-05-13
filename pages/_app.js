import "../styles/globals.css";
import Layout from "@/components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps, router }) {
  let signUp = router.pathname.startsWith("/register/sign_up");
  let signIn = router.pathname.startsWith("/register/sign_in");
  //Remove Navbar
  if (signUp || signIn) {
    return <Component {...pageProps} />;
  }
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
