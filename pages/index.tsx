import Head from "next/head";
import { Splash, Features } from "@/components/_Home";
export default function Home() {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Market Maker</title>
      </Head>
      <main>
        <Splash />
        <Features />
      </main>
    </div>
  );
}
