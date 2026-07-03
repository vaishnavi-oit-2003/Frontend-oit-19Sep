import React, { createContext, useContext } from "react";

function createAppContext(displayName) {
  const Context = createContext(undefined);
  Context.displayName = displayName;

  function useAppContext() {
    const value = useContext(Context);
    if (value === undefined) {
      throw new Error(
        `use${displayName} must be used within a ${displayName}Provider`
      );
    }
    return value;
  }

  return { Context, Provider: Context.Provider, useAppContext };
}

export default createAppContext;
