import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import DashLayout from "@/components/_Dashbaord/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath: boolean = router.pathname.startsWith("/dashboard");

  if (currentPath) {
    return (
      <UserProvider>
        <DashLayout>
          <Component {...pageProps} />
        </DashLayout>
      </UserProvider>
    );
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
