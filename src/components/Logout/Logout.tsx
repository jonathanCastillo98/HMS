import { useNavigate } from "react-router-dom";
import { UserKey, resetUser } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities"
import { PublicRoutes } from "../../models";
import { useDispatch } from "react-redux";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        clearLocalStorage(UserKey);
        dispatch(resetUser())
        navigate(PublicRoutes.LOGIN, { replace: true })
    }

    return (
        <button onClick={logout}>Log out</button>
    )
}
export default Logout