import AppLayout from "../layout/AppLayout";
import {
  LoginPage,
  SignUpSelectPage,
  SignUpPage,
  MainPage,
  DefaultMyPage,
  MaderMyPage,
  ProductListPage,
  ProductDetailPage,
  PurchaseFormPage,
  PurchaseFormSuccessPage,
  NotFoundPage,
  ExplainPage,
  ProductDetailPageSell,
  ProductDetailPageSold,
  FavoriteMaderListPage,
  FavoriteProductsListPage,
  MaderHomePage,
  NotiMessagesPage,
  NoticeBoardPage,
  NoticeDetailPage,
  SellingProductDetailPage,
  SoldoutProductDetailPage,
  SellingProductsListPage,
  SoldoutProductsListPage,
  PurchaseRequestsPage,
  BuyerInfoModifyPage,
  PurchaseHistoryPage,
  ProductModifyPage,
  ProductRegisterPage,
  AfterLoginPage,
  BeforeLoginPage,
} from "../pages";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signUpSelect", element: <SignUpSelectPage /> },
      { path: "signUp", element: <SignUpPage /> },
      { path: "defaultMyPage", element: <DefaultMyPage /> },
      { path: "maderMyPage", element: <MaderMyPage /> },
      { path: "product/list", element: <ProductListPage /> },
      { path: "product/:productId", element: <ProductDetailPage /> },
      { path: "product/:productId/purchase", element: <PurchaseFormPage /> },
      {
        path: "product/:productId/purchase/success",
        element: <PurchaseFormSuccessPage />,
      },
      { path: "explain", element: <ExplainPage /> },
      { path: "productDetailPageSell", element: <ProductDetailPageSell /> },
      { path: "productDetailPageSold", element: <ProductDetailPageSold /> },

      // 24-08-01 이후로 추가된 라우팅 주석 처리된 부분은 진웅님 페이지
      { path: "notice/Board", element: <NoticeBoardPage /> },
      { path: "notice/:noticeId", element: <NoticeDetailPage /> },
      { path: "defaultMyPage/modify/myInfo", element: <BuyerInfoModifyPage /> },
      {
        path: "defaultMyPage/favorite/products",
        element: <FavoriteProductsListPage />,
      },
      {
        path: "defaultMyPage/favorite/maders",
        element: <FavoriteMaderListPage />,
      },
      {
        path: "defaultMyPage/purchase/History",
        element: <PurchaseHistoryPage />,
      },
      {
        path: "defaultMyPage/purchase/messages",
        element: <NotiMessagesPage />,
      },
      { path: "maderHome", element: <MaderHomePage /> },
      {
        path: "maderMyPage/products/selling",
        element: <SellingProductsListPage />,
      },
      {
        path: "maderMyPage/products/soldout",
        element: <SoldoutProductsListPage />,
      },
      {
        path: "maderMyPage/products/selling/:productId",
        element: <SellingProductDetailPage />,
      },
      {
        path: "maderMyPage/products/soldout/:productId",
        element: <SoldoutProductDetailPage />,
      },
      {
        path: "maderMyPage/purchase/requests/:productId",
        element: <PurchaseRequestsPage />,
      },
      {
        path: "maderMyPage/product/register",
        element: <ProductRegisterPage />,
      },
      { path: "maderMyPage/product/modify", element: <ProductModifyPage /> },
      { path: "/api/v1/auth/buyer/test", element: <BeforeLoginPage /> },
      { path: "/api/v1/auth/buyer/:provider", element: <AfterLoginPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
];

export default Router;
