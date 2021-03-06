import getStripe from "../../utils/get-stripejs";
import { fetchPostJSON } from "../../utils/api-helpers";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

const PriceCards = () => {
  const { user } = useUser();
  const router = useRouter();
  const handleClick: React.EventHandler<any> = (priceId: string) => {
    if (!user) {
      router.push("api/auth/login");
      return;
    } else {
      router.push("/subscriptions");
      return;
    }
  };
  return (
    /* Two Price Cards // Styles in global.css*/
    <div
      id="price-cards"
      className="grid gap-10 justify-items-center w-11/12 sm:w-auto mx-auto sm:flex sm:justify-between"
    >
      <div className="price-card">
        <h2>Free</h2>
        <p>Try out the platform for free</p>
        <h2>$0 / mo</h2>
        <ul>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Twitter Alerts (15 min delay)
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Portfolio Tracking
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Fun Financial Literacy Guides
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Public Discord
          </li>
        </ul>

        <button
          className="btn"
          onClick={() => handleClick("price_1Iv4fKGCLPB3c1Gb3oeACKSt")}
        >
          Get Started
        </button>
      </div>
      <div className="price-card">
        <h2>Premium</h2>
        <p>Ready to play in the big leauges?</p>
        <h2>$40 / mo</h2>
        <ul>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            All Free Features
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Instant Alerts
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Options Flow and Dark Pool Tracking
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Real-Time Charts with Proprietary Overlays
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Social Media & Sentiment Tracking
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Earn Rewards with Real Value
          </li>
          <li>
            <img src="./assets/checkmark.svg" alt="checkmark icon" />
            Early Access to New Features
          </li>
        </ul>
        <button
          className="btn"
          onClick={() => handleClick("price_1Iv4eIGCLPB3c1Gbupd88qoS")}
        >
          Get Premium
        </button>
      </div>
    </div>
  );
};

export default PriceCards;
