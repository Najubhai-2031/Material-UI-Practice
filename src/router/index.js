import Header from "../Components/Header";
import AuthanticationLayout from "../Layout/AuthanticationLayout";
import MainLayout from "../Layout/MainLayout";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";

const Router = [
  {
    path: "auth",
    element: <AuthanticationLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Header /> },
    ],
  },
]

export default Router;