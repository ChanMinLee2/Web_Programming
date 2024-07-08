import AppLayout from "../layout/AppLayout";
import MainPage from "./../pages/Main/MainPage";

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
