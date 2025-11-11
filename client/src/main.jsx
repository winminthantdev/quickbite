import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import store from '@/store/store'; 
import router from "@/routes/router";
import "./index.css";



const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> 
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
