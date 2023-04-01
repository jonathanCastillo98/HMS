import { useNavigate } from "react-router-dom";
import { UserKey } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities"
import { PublicRoutes } from "../../models";

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        clearLocalStorage(UserKey);
        navigate(PublicRoutes.LOGIN, { replace: true })
    }

    return (
        <button onClick={logout}>Log out</button>
    )
}
export default Logout