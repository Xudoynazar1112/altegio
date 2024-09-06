import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../../shared/protectedRout/ProtectedRoute"
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import Pricing from "../../pages/price/Pricing"
import NotFoundPage from "../../pages/notfound/NotFoundPage";
import MainWrapper from "../../global/MainWrapper";
import LoginPage from "../../pages/account/LoginPage";
import RegisterPage from "../../pages/account/RegisterPage";
import Contract from "../../pages/price/Contract";

const Logout = () => {
  localStorage.clear()
  return <Navigate to='/' />
}

const RegisterAndLogout = () => {
  localStorage.clear()
  return <RegisterPage />
}

const router = createBrowserRouter(
  MainWrapper([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterAndLogout />,
    },
    {
      path: "/contract",
      element: 
      <ProtectedRoute>
        <Contract />,
      </ProtectedRoute>
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ])
);

export default router;
