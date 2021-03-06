import Head from "next/head";
import {
  Splash,
  Features,
  Plans,
  Rectangle,
  Screenshots,
  Start,
} from "@/components/_Home";
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

        <Plans />

        <Rectangle
          title="Investing is better together"
          info="That’s why we give every subscriber a unique referral code. Bring some friends and get 10% off for every referral, every month they subscribe."
          button="Learn more >"
          image="/Home/rectangle/two_people.svg"
        />

        <Screenshots />

        <Rectangle
          title="Created by retail for retail"
          info="Our team leverages a diverse set of experience to bring institution level analysis to retail investors. We’re committed to helping everyone navigate the complex world of finance, and we’re completely self funded."
          button="Learn more >"
          image="/Home/rectangle/three_people.svg"
        />

        <Start />
      </main>
    </div>
  );
}
