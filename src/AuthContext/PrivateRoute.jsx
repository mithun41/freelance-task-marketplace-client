import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to={"/signin"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
