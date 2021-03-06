import useAccessKey from "../../utils/hooks/useAccessKey";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { isLoading, user } = useUser();
  const authUser = user?.sub?.replace("|", "%7C");
  const [loading, setLoading] = useState(true);
  const [access, setAccess] = useState("Access Denied");
  useEffect(async () => {
    if (isLoading) {
      return;
    } else {
      const permission = await useAccessKey(authUser);
      await setLoading(false);
      if (permission === "Access Granted") {
        setAccess("Access Granted to Dashboard");
      } else {
        return;
      }
    }
    //throws error on refresh
  }, [isLoading]);

  return (
    <div
      id="home_page-one-gradient"
      className="h-screen grid place-content-center text-xl text-white"
    >
      {loading ? <div>...loading</div> : <div>{access}</div>}
    </div>
  );
};

export default Dashboard;
export const getServerSideProps = withPageAuthRequired();
