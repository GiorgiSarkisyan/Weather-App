/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CityContext = createContext();

export function CityProvider({ children }) {
  const [city, setCity] = useState("Tbilisi");
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}
