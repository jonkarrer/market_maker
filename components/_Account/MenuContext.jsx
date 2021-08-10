import React, { useContext, useState } from "react";

const MenuContext = React.createContext();
const ChangePage = React.createContext();

export function accessMenuContext() {
  return useContext(MenuContext);
}

export function useChangePage() {
  return useContext(ChangePage);
}

export function MenuProvider({ children }) {
  const [userPage, setUserPage] = useState(true);
  function updateUserPosition() {
    setUserPage(false);
  }
  return (
    <MenuContext.Provider value={userPage}>
      <ChangePage.Provider value={updateUserPosition}>
        {children}
      </ChangePage.Provider>
    </MenuContext.Provider>
  );
}
