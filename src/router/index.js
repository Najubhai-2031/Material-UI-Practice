import AuthanticationLayout from "../Layout/AuthanticationLayout";
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
]

export default Router;