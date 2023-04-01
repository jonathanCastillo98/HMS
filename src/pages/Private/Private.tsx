import { Route, Navigate } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { lazy } from "react"
import RoutesWithNotFound from "../../utilities/routesWithNotFound.utility"

const Admin = lazy(() => import('./Admin/Admin'))
const Home = lazy(() => import('./Home/Home'))

const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.ADMIN} />} />
            <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </RoutesWithNotFound>
    )
}
export default Private