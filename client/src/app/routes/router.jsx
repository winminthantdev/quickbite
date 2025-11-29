import { createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "./protectedRoute";
import PageNotFound from "@/components/ui/PageNotFound"

import Home from "@/features/user/pages/Home"
import AllProducts from "../features/user/pages/AllProducts";
import ProductCategory from "../features/user/pages/ProductCategory";
import ProductDetails from "../features/user/pages/ProductDetails";

import CartPage from "../features/auth/pages/CartPage";
import AddAddress from "../features/auth/pages/AddAddress";
import MyOrders from "../features/auth/pages/MyOrders";
import PaymentPage from "../features/auth/pages/PaymentPage";

import authRouter from "./authRouter";
import { authUtils } from "@/lib/utils";
import MainLayout from "../components/core/layouts/MainLayout";
import AdminLayout from "../components/core/layouts/AdminLayout";
import ProfilePage from "../features/user/pages/ProfilePage";

const token = authUtils.getToken()
const role= authUtils.getRole();



const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {path:'products' , element: <AllProducts />},
      {path:'products/:category' , element: <ProductCategory />},
      {path:'products/:category/:subcategory' , element: <ProductCategory />},
      {path:'products/:category/:subcategory/:id' , element: <ProductDetails />},
    ],
  },

  // USER ROUTES
  {
    // element: <ProtectedRoute token={token} role={role} allow={["USER", "ADMIN"]} />,
    children: [
      {
        path: "/my-account",
        element: <MainLayout />,
        children: [
          { path: "cart", element: <CartPage /> },
          { path: "add-address", element: <AddAddress /> },
          { path: "orders", element: <MyOrders /> },
          { path: "payments", element: <PaymentPage /> },
          { path: "user-info", element: <ProfilePage /> }
        ],
      },
    ],
  },

  //ADMIN ROUTES
  {
    path: "/admin",
    // element: <ProtectedRoute token={token} role={role} allow={["USER", "ADMIN"]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
        //   { path: "/examplepath", element: <ExampleElement /> },
        ],
      },
    ],
  },


  ...authRouter,

  { path: "*", element: <PageNotFound/> },
]);

export default router;
