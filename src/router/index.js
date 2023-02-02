import Body from "../Components/Body";
import AuthanticationLayout from "../Layout/AuthanticationLayout";
import MainLayout from "../Layout/MainLayout";
import PageNotfound from "../pages/404";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";

const Router = [
  {
    path: "auth",
    element: <AuthanticationLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "*", element: <PageNotfound /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "*", element: <PageNotfound /> },
    ],
  },
];

export default Router;
