import { NextPage } from "next";
import { useRouter } from "next/router";

import { fetchGetJSON } from "../utils/api-helpers";
import useSWR from "swr";

const ResultPage: NextPage = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;

  return (
    <>
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
        <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
        <h3>CheckoutSession response:</h3>
      </div>
    </>
  );
};

export default ResultPage;
