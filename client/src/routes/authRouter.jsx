import { AuthPage, LoginPage, RegisterPage   } from "@/constants/lazyload";


const authRouter = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "auth/callback",
    element: <AuthPage />,
  }
];

export default authRouter;
