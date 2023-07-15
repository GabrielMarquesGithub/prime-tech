import { RouterProvider } from "react-router-dom";

// Rotas da aplicação
import { router } from "./routes";

import "./assets/styles/global.scss";

function App() {
  const a = 0;
  return <RouterProvider router={router} />;
}
export default App;
