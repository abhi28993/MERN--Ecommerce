import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import FooterComponents from "./components/FooterComponents";
import HeaderComponent from "./components/HeaderComponent";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import RoutesWithUserChatComponent from "./components/Chat/RoutesWithUserChatComponent";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not Exist 404" />
          {/* {<Route path="/test" component={TestPage} />} is in the previous version of the react-router  */}

          {/* <Route element={<ProtectedRoutesComponent admin={false} />}> */}
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserOrderDetailsPage />} />
          <Route path="/user/order-details" element={<UserCartDetailsPage />} />
          {/* </Route> */}
        </Route>

        {/* {Admin Protected routes } */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/user" element={<AdminUsersPage />} />
          <Route path="/admin/my-orders" element={<AdminProductPage />} />
          <Route path="/admin/cart-details" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/order-details" element={<AdminEditUserPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminEditProductPage />}
          />
          <Route
            path="/admin/order-details"
            element={<AdminCreateProductPage />}
          />
          <Route path="/admin/order-details" element={<AdminChatsPage />} />
          <Route path="/admin/order-details" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <br/>
      <FooterComponents />
    </BrowserRouter>
  );
};

export default App;
