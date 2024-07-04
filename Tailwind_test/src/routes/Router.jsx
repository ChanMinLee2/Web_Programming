import MainPage from "../pages/MainPage";
import AppLayout from "../layout/AppLayout";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
        label: "main",
      },
    ],
  },
];

export default Router;
