import React, { useState, createContext, useContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: null,
    isAuth: false,
    token: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [onboarded, setOnboarded] = useState(false);
  const [registering, setRegistering] = useState(false);

  return (
    <stateContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        loggedIn,
        setLoggedIn,
        onboarded,
        setOnboarded,
        registering,
        setRegistering,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
