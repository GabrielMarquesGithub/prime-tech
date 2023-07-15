import { createBrowserRouter } from "react-router-dom";

import { Root } from "./Root";

// Estrutura de rotas da aplicação
export const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <div />,
    children: [
      {
        path: "/",
        element: <div />,
      },
    ],
  },
]);

export default router;
