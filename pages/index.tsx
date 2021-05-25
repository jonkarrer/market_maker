import Head from "next/head";
import PriceCards from "@/components/home/PriceCards";
import InfoBlocks from "@/components/home/InfoBlocks";
import { fetchGetJSON } from "../utils/api-helpers";

export default function Home() {
  const handleClick = async () => {
    let user = await fetchGetJSON("api/stripe/user");
    return await console.log(user);
  };
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Market Maker</title>
      </Head>
      {/* Page One */}
      <section
        id="home_page-one-gradient"
        className="relative h-screen overflow-hidden grid grid-row-2 sm:min-h-500px sm:flex sm:items-center"
      >
        <div
          id="home-image"
          className="mx-std my-10 flex items-center justify-center sm:mx-0 sm:mr-std sm:w-2/5 sm:order-2 z-10"
        >
          <img
            className="w-2/3 sm:w-full xl:max-w-7xl"
            src="assets/page_one.svg"
            alt="stock image"
          />
        </div>
        <article className="z-10 font-semibold text-white flex flex-col mx-std sm:mx-0 sm:ml-std sm:order-1 sm:justify-center sm:w-2/3">
          <h1 className="text-mobile-h font-semibold leading-none sm:text-desktop-h sm:mr-5 xl:mr-10 2xl:mr-16">
            The market data we deserve
          </h1>
          <div className="space-y-6 md:space-y-8 xl:space-y-12 2xl:space-y-16">
            <p className="text-mobile-p mt-10% sm:text-desktop-p sm:font-normal sm:mr-20% sm:mt-12%">
              Trade like never before - visualized data, insights, and
              statistics to make sense of complicated financial markets
            </p>
            <div className="w-full flex justify-center sm:block">
              <button className="btn text-mobile-p sm:text-1.5vw xl:text-1.3vw hover:bg-btn-hover">
                Get Early Access
              </button>
            </div>
          </div>
        </article>
      </section>
      {/* Page Two */}
      <div
        id="banner-butt-container"
        className="w-11/12 sm:w-5/6 mx-auto my-10% sm:my-10 flex justify-center 2xl:my-20"
      >
        <button
          id="banner-button"
          className="btn shadow-md bg-lt-blue w-max text-3vw sm:text-1.5vw py-3 px-8 sm:py-5 sm:px-14"
          onClick={() => handleClick()}
        >
          Make a market today! Invite a friend and recieve $10 off each month
          they subscribe.* Learn More {">"}
        </button>
      </div>
      <section className="h-auto sm:mx-std sm:my-16 2xl:my-20">
        <h1 className="text-center text-mobile-h sm:text-desktop-h">
          Make Sense of Complicated Markets
        </h1>
        <p className="text-mobile-p sm:text-desktop-p mx-std my-10% sm:mx-6% sm:my-14 2xl:my-20">
          Trading is difficult. That's why we created a financial information
          platform built for everyone. Get the coverage you need, delivered
          through an elegant interface.
        </p>

        <InfoBlocks />

        <PriceCards />
      </section>
      {/* Page Three */}
      <section className="items-center mx-std sm:flex sm:justify-between">
        <div
          id="left-panel"
          className="flex flex-col items-center my-12% sm:my-8% sm:space-y-12"
        >
          <img
            className="w-1/2 my-10% sm:my-0"
            src="./assets/four-circles.svg"
            alt="4 circles logo"
          />
          <article className="space-y-5">
            <h2 className="text-8vw sm:text-4vw md:text-3vw">Options</h2>
            <p className="sm:mr-5 sm:text-sm xl:text-xl 2xl:text-1.3vw">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur! <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur!
            </p>
          </article>
        </div>
        <div
          id="right-panel"
          className="flex flex-col items-center my-12% sm:my-8% sm:space-y-12"
        >
          <article className="space-y-5 order-2 sm:order-1">
            <h2 className="text-8vw sm:text-4vw md:text-3vw">Stocks</h2>
            <p className="sm:mr-5 sm:text-sm xl:text-lg 2xl:text-1.3vw">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur! <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur!
            </p>
          </article>
          <img
            className="w-1/2 my-10% sm:my-0 order-1"
            src="./assets/four-circles.svg"
            alt="4 circles logo"
          />
        </div>
      </section>
      {/* Bottom Banner */}
      <section
        id="home_bottom-banner"
        className="py-3 sm:py-8 bg-gradient-to-tr from-lt-blue to-lt-teal"
      >
        <h1># made by friends with a passion for markets</h1>
        <p className="text-center text-white text-base mx-std pt-3 sm:text-1.5vw sm:mx-std sm:mt-8">
          Our team has a diverse background of academic and industry experiences
          including finance, engineering, and media. We aren't paid by in large
          by the banks, we don't sell your information, we stay commited to the
          average investor
        </p>
      </section>
    </div>
  );
}
