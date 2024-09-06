import { Navigate, RouterProvider } from "react-router-dom";
import router from "./providers/router";
import "../app/css/main.css";
import "../app/css/global.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
