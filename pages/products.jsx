import useAccessKey from "../utils/hooks/useAccessKey";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
const Products = () => {
  const { isLoading, user } = useUser();
  const authUser = user?.sub?.replace("|", "%7C");
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    if (isLoading) {
      return;
    } else {
      const permission = await useAccessKey(authUser);
      if (permission === "Access Granted") {
        setLoading(false);
      }
    }
    //throws error on refresh
  }, [isLoading]);

  return (
    <div className="h-screen grid place-content-center bg-black text-xl text-white">
      {loading ? <div>...loading</div> : <div>Access Granted</div>}
    </div>
  );
};

export default Products;
