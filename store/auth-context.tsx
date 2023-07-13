import React, {PropsWithChildren, createContext, useState} from 'react';

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({children}: PropsWithChildren) {
  const [authToken, setAuthToken] = useState<string | null>(null);

  function authenticate(token: string) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
