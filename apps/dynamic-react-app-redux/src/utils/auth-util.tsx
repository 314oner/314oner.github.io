import React, { createContext, useContext, useState } from 'react';
import { redirect } from 'react-router-dom';

interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginUser = () => setIsAuthenticated(true);

  const logoutUser = () => {
    setIsAuthenticated(false);
    redirect('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth muse be used within an AuthProvider');
  }

  return context;
};
