import React from 'react';

export const useAuth = () => {
  return {
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
  };
};

export const useTitle = (title: string): void => {
  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};
