import React, { useContext, useState, Dispatch, SetStateAction } from "react";

interface IContext {
  currentSubscription: string;
  userSelection: string;
  setUserSelection: Dispatch<SetStateAction<string>>;
  updateSubscription: Dispatch<SetStateAction<string>>;
}
export const SubscriptionContext = React.createContext<IContext | null>(null);

export const useSubscriptionContext = () => {
  return useContext(SubscriptionContext);
};

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [currentSub, setNewSub] = useState("Free");
  const [userSelection, setUserSelection] = useState("");
  return (
    <SubscriptionContext.Provider
      value={{
        currentSubscription: currentSub,
        userSelection: userSelection,
        setUserSelection: setUserSelection,
        updateSubscription: setNewSub,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
export default SubscriptionProvider;
