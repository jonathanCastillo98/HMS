import { Navigate, Route, Routes } from 'react-router-dom'
import { Top } from './Top'
import './bodySection.css'
import { Doctors } from './Doctors'
import { AdminRoutes } from '../../../../models'
import { Patients } from './Patients'

const BodySection = () => {
    return (
        <div className="mainContent">
            <Top />
            <div className="bottom flex">
                <Routes>
                    <Route path='/' element={<Navigate to={AdminRoutes.DOCTORS} />} />
                    <Route path={AdminRoutes.DOCTORS} element={<Doctors />} />
                    <Route path={AdminRoutes.PATIENTS} element={<Patients />} />
                </Routes>
            </div>

        </div>
    )
}
export default BodySection