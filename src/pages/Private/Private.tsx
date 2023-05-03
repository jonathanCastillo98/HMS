import { Route, Navigate } from "react-router-dom"
import { PrivateRoutes, Roles } from "../../models"
import { lazy } from "react"
import RoutesWithNotFound from "../../utilities/routesWithNotFound.utility"
import RoleGuardian from "../../guards/role.guard"

const Admin = lazy(() => import('./Admin/Admin'))
const Home = lazy(() => import('./Home/Home'))

const Private = () => {
    return (
        <div className="private">
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
                <Route element={<RoleGuardian role={Roles.ADMIN} />}>
                    <Route path={`${PrivateRoutes.ADMIN}/*`} element={<Admin />} />
                </Route>
                <Route path={PrivateRoutes.HOME} element={<Home />} />
            </RoutesWithNotFound>
        </div>

    )
}
export default Private