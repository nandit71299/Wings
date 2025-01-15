import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Homepage from "./pages/Homepage";
import Service from "./pages/Service";
import ErrorPage from "./components/page/ErrorPage";
import AboutUs from "./pages/AboutUs";
import Story from "./pages/Story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "services/:id", element: <Service /> },
      { path: "stories/:id", element: <Story /> },
      {
        path: "what-we-do",
        element: <div>What we do</div>,
      },
      {
        path: "careers",
        element: <div>Careers Page</div>,
      },
      {
        path: "contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "who-are-we",
        children: [
          {
            index: true,
            element: <AboutUs />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
