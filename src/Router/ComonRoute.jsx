import React from "react";
import Loading from "../Components/Loading/Loading";
import useRole from "../Hooks/useRole";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ComonRoute = ({children}) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [isAdmin, isTrainer, isRoleLoading] = useRole();

  if (loading || isRoleLoading) {
    return <Loading />;
  }

  if ((user && isAdmin) || isTrainer) {
    return children;
  }

  return navigate("/");
};

export default ComonRoute;
