import React, { useContext, useState, Dispatch, SetStateAction } from "react";

interface IContext {
  currentSubscription: string;
  updateSubscription: Dispatch<SetStateAction<string>>;
}
export const SubscriptionContext = React.createContext<IContext | null>(null);
export const useSubscriptionContext = () => {
  return useContext(SubscriptionContext);
};

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [currentSub, setNewSub] = useState("Free");
  return (
    <SubscriptionContext.Provider
      value={{
        currentSubscription: currentSub,
        updateSubscription: setNewSub,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
export default SubscriptionProvider;
