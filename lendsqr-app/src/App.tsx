import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login />,
    element: (
      <div>
        <Header />
        <Sidebar />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
