import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");
  const location = useLocation();
  //console.log(location);
  //const authenticated = true;

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first", from: location.pathname }}
        replace={true}
      />
    );
  }

  return <Outlet />;
}
