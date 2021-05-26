import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useUser } from "@auth0/nextjs-auth0";
import useCapture from "../utils/hooks/useCapture";

const ResultPage: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) {
    return <div>failed to load</div>;
  } else {
    //passes the data to the auth0 user account. user.sub will be used
    const { customer, subscription } = data.session;
    useCapture(customer, subscription);
  }

  return (
    <>
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_status ?? "loading..."}</h2>
        <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
        <h3>CheckoutSession response:</h3>
      </div>
    </>
  );
};

export default ResultPage;
