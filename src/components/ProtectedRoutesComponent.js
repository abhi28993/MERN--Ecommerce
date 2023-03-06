import { Outlet, Navigate } from "react-router-dom";
import UserChatComponents from "./Chat/UserChatComponents";

const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let AdminAuth = true;
    if (AdminAuth) return AdminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    if (userAuth)
      return userAuth ? (
        <>
          <UserChatComponents />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      );
  }
};

export default ProtectedRoutesComponent;
