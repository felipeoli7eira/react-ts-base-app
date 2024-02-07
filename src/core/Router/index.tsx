import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import App from "../../App";
import Protected from "./Protected";
import React from "react";
import Configure from "../Configure";

const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <Configure pageName="teste">
        <p>root</p>
      </Configure>
    ),
  },
  {
    path: "login",
    element: <p>login form</p>,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    element: <Protected />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
    ],
  },
];

const routes = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

const AppRouterProvider: React.FC = () => (
  <RouterProvider router={routes}></RouterProvider>
);

export default AppRouterProvider;
