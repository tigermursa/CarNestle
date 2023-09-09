"use client";

import { createContext, useContext } from "react";

// create context
export const SearchContext = createContext();

// provider here
export const SearchContextProvider = ({ children }) => {
  return (
    <SearchContextProvider value={"search context"}>
      {children}
    </SearchContextProvider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
