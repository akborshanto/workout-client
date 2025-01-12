import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Loading from "../Components/Loading/Loading";

const TrainerRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [,isTrainer, isRoleLoading] = useRole();
  console.log(isRoleLoading, isTrainer)

  if (loading || isRoleLoading  ) {
    return <Loading />;
  }

  if (user && isTrainer) {
    return children;
  }

  return navigate("/");
};

export default TrainerRoute;
