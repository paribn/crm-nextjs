"use client";

import { createContext, useState } from "react";
import Loader from "@/components/shared/Loader/Loader";

export const LoaderContext = createContext({
  loading: false,
  setLoading: () => {},
});

const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <Loader />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
