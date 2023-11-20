import { createContext, useState } from "react";

export const AddButtonContext = createContext();

export const AddButtonContextProvider = ({ children }) => {
  const [disableControl, setDisableControl] = useState(false);

  return (
    <AddButtonContext.Provider value={{ disableControl, setDisableControl }}>
      {children}
    </AddButtonContext.Provider>
  );
};
