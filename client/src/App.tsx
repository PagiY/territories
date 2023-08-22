import { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./views/Login";
import { Home } from "./views/Home";

import { AuthContext } from './contexts/AuthContext';

import Protected from "./components/Protected";

// Build the routes for this app
const routes = createBrowserRouter([
  {
    path: '/account/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  }
]);

export const App = () => {
  const [auth, setAuth] = useState<{
    username: string,
    displayName: string,
    roles: string[] } | undefined>(undefined);
  
  // checks if user is logged in. If user is logged in, redirect to /account/login or
  // the login page
  useEffect(() => {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      setAuth(JSON.parse(user));
    } else {
      setAuth(undefined);
    }
  }, []);
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <RouterProvider router={routes} />
    </AuthContext.Provider>
  );
}