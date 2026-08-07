import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>

    <App/>

    <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
            duration:3000,
            style:{
                borderRadius:"14px",
                padding:"16px",
                fontSize:"15px",
            },
            success:{
                iconTheme:{
                    primary:"#2563eb",
                    secondary:"#fff",
                },
            },
        }}
    />

</ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);