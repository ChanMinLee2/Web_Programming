import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./components/Header";

const router = createBrowserRouter(Router);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
