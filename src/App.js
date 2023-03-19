import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/admin/Dashboard";
import SignIn from "./Components/admin/SignIn";
import Body from "./Components/Body";
import Home from "./Components/Home";

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
      <Dashboard />
    </>
  );
}

export default appRouter;
