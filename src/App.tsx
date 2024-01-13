import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import { Main } from "./routes/Main";
import { Projects } from "./routes/Projects";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/projects",
        element: <Projects />,
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
