import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "who-are-we",
        element: <div>Who are we</div>,
      },
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
