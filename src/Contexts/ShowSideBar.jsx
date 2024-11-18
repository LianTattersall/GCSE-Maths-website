import { createContext, useState } from "react";

export const ShowSideBarContext = createContext();

export const ShowSideBarPovider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <ShowSideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </ShowSideBarContext.Provider>
  );
};
