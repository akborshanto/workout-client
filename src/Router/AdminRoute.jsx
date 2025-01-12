import { useNavigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [isAdmin, isRoleLoading] = useRole();

  if (loading || isRoleLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }

  return navigate("/");
};

export default AdminRoute;
