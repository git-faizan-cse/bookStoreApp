import React from "react";

export const AuthContext = React.createContext(null);
export default function AuthProvider({ children }) {
  const initialAuthState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [authUser, setAuthUser] = React.useState(initialAuthState);
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
