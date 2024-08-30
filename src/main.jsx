import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Services from "./components/Services.jsx";
import About from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Layout from "./Layout.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "CaseStudies",
        element: <CaseStudies />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "AboutUs",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
