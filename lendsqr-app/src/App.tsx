import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard";
import UserDetails from "./components/UserDetails/UserDetails";
import UsersPage from "./components/UserPage/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: (
      <UsersPage>
        <Dashboard />
      </UsersPage>
    ),
  },
  {
    path: "user/:userId",
    element: (
      <UsersPage>
        <UserDetails />
      </UsersPage>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
