import { fetchPatchJSON } from "../api-helpers";

//When a user checks out via stripe, we need to capture their cus_id and sub_id and pass that to their auth0 account

export default function useCapture(
  customer: string,
  subscription: string,
  userId: string | undefined | null
) {
  //grab stripe info post checkout in the results page
  //pass the info to the current auth0 account
  fetchPatchJSON(`api/auth/user/${userId}`, {
    app_metadata: { cus_number: customer, sub_number: subscription },
  });
}
