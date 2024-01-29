import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/Root";
import { Main } from "@/routes/Main";
import { Projects } from "@/routes/Projects";
import { Learning } from "./routes/Learning";

const { BASE_URL } = import.meta.env

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Root />,
    children: [
      {
        path: BASE_URL,
        element: <Main />,
      },
      {
        path: `${BASE_URL}/projects`,
        element: <Projects />,
      },
      {
        path: `${BASE_URL}/learning`,
        element: <Learning />,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
