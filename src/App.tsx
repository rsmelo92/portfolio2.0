import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/Root";
import { Main } from "@/routes/Main";
import { Projects } from "@/routes/Projects";

const router = createBrowserRouter([
  {
    path: "/portfolio2.0/",
    element: <Root />,
    children: [
      {
        path: "/portfolio2.0/",
        element: <Main />,
      },
      {
        path: "/portfolio2.0/projects",
        element: <Projects />,
      },
    ],
  },
]);

// ????
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
