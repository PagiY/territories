import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./views/Login";
import { Home } from "./views/Home";

// Build the routes for this app
const routes = createBrowserRouter([
  {
    path: '/account/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  }
]);

export const App = () => {

  return (
    <RouterProvider router={routes} />
  );
}