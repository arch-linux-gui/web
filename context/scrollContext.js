"use client";
import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const whatsNewRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ whatsNewRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
