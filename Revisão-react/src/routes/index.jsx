import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NãoEncontrada from "../pages/NãoEncontrada";
import FaleConosco from "../pages/FaleConosco";
import SobreNos from "../pages/SobreNós";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/fale-conosco",
        element: <FaleConosco />,
      },
      {
        path: "/sobre",
        element: <SobreNos />,
      },
    ],
  },
  {
    path: "*",
    element: <NãoEncontrada />,
  },
]);
