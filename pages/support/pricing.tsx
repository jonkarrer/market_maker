import Gradient from "@/components/_Support/Gradient";
import SubscriptionProvider from "@/components/SubscripContext";
import { Plan, Title, Benefits } from "@/components/_Support/Pricing";

export default function Pricing() {
  return (
    <SubscriptionProvider>
      <main>
        <Gradient pageName="Pricing" />

        <section>
          <div className="wrapper grid place-items-center gap-20">
            <h2 className="font-normal text-center">Compare plan features</h2>

            <div className="w-full grid gap-10 place-items-center lg:flex lg:gap-0">
              <Plan name="Free">
                <Title title="Free" price="$0" />
                <Benefits>
                  <p>Financial literacy tools</p>
                  <p>Open Source Models</p>
                  <p>Portfolio Tracking</p>
                  <p>Discord Community</p>
                </Benefits>
              </Plan>

              <Plan name="Monthly">
                <span className="bg-splash absolute top-0 left-0 right-0 w-full text-white font-bold py-1 text-center">
                  Most Popular
                </span>
                <Title title="Monthly" price="$39 per month" />
                <Benefits>
                  <h6 className="font-semibold">All Free Features</h6>
                  <p>Premium Discord Channels</p>
                  <p>Real-time Alerts</p>
                  <p>Real-time Charts</p>
                  <p>Options Charts</p>
                  <p>Options Flow</p>
                  <p>Option Statistics</p>
                  <p>Curated News Feeds</p>
                  <p>Sentiment Tracking</p>
                  <p>Earn Rewards</p>
                  <p>Billed monthly</p>
                </Benefits>
              </Plan>

              <Plan name="Annual">
                <Title title="Annual" price="$399 per year" />
                <Benefits>
                  <h6 className="font-semibold">All Monthly Features</h6>
                  <p>Exclusive Savings</p>
                  <p>Priority Feature Requests</p>
                  <p>Support Our Development</p>
                </Benefits>
              </Plan>
            </div>
          </div>
        </section>
      </main>
    </SubscriptionProvider>
  );
}
