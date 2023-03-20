import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/admin/Dashboard";
import SignIn from "./Components/SignIn";
import Body from "./Components/Body";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import UserProfile from "./Components/UserProfile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "my-profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "admin",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default appRouter;
