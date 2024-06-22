import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login />,
    element: (
      <div>
        <Header />
        <div style={{display: "flex", paddingTop: "108px"}}>
          <Sidebar />
          <div style={{padding: "60px", width: "100%" }}><Dashboard /></div>
        </div>
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
