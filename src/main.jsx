import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routers/Routers";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <HelmetProvider>
          <div className="max-w-5xl mx-auto overflow-x-hidden">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </HelmetProvider>
        <Toaster richColors position="top-center"/>
    </AuthProvider>
  </React.StrictMode>
);
