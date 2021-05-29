import { fetchGetJSON } from "../api-helpers";

//This hook will validate users subscription status
//When a user logs in to auth0 in the future, we need to cross check their subscription delinquent status
//If they are not delinquent, we need to allow them to access the content.

export default async function useAccessKey(authUser?: string): Promise<string> {
  const authUserInfo = await fetchGetJSON(`api/auth/user/${authUser}`);
  const stripeCusNumber = await authUserInfo.app_metadata?.cus_number;
  const stripeUserInfo = await fetchGetJSON(`api/stripe/${stripeCusNumber}`);
  let delinquentStatus = stripeUserInfo.delinquent;
  await console.log(authUserInfo);
  await console.log(stripeCusNumber);
  await console.log(stripeUserInfo);
  await console.log(delinquentStatus);
  if (delinquentStatus === true) {
    return "Access Denied";
  } else if (delinquentStatus === false) {
    return "Access Granted";
  } else {
    return "Not a Customer";
  }
}
