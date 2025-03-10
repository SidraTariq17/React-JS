import "./App.css";
import SplitScreen from "./pages/Login";
import Register from "./pages/Register";
import { Index } from "./pages/MainPage";
import Donorpage from "./pages/Donors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "./components/nav";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Register />
        </>
      ),
    },
    {
      path: "/Register",
      element: <Register />,
    },

    {
      path: "/Login",
      element: <SplitScreen />,
    },

    {
      path: "/Home",
      element: (
        <>
          <Example />
          <Index />
        </>
      ),
    },
    {
      path: "/Donor",
      element: (
        <>
          <Example />
          <Donorpage />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
