            // <Route path='/' element={<Home />} />
            // <Route path='/products' element={<AllProducts />} />
            // <Route path='/products/:category' element={<ProductCategory />} />
            // <Route path='/products/:category/:subcategory' element={<ProductCategory />} />
            // <Route path='/products/:category/:subcategory/:id' element={<ProductDetails />} />
            // <Route path='/cart' element={<CartPage />} />

            // <Route path="/my-account/add-address" element={<PrivateRoute element={<AddAddress />} />} />
            // <Route path="/my-account/orders" element={<PrivateRoute element={<MyOrders />} />} />
            // <Route path="/my-account/payments" element={<PrivateRoute element={<PaymentPage />} />} />

import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import NotFound from "../features/auth/pages/NotFound";

import authRouter from "./authRouter";
import { authUtils } from "@/lib/utils";

const token = authUtils.getToken()
const role= authUtils.getRole();



const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
    ],
  },

  // USER ROUTES
  {
    element: <ProtectedRoute token={token} role={role} allow={["USER", "ADMIN"]} />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
        //   { path: "/examplepath", element: <ExampleElement /> },

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

  { path: "*", element: <PageNotFound /> },
]);

export default router;
