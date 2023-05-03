import './sidebar.css'

import logo from '../../../../assets/logo.png'

import { FaUserMd } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { BiLogOut } from 'react-icons/bi'

import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ModalLogOut } from '../../../../components/ModalLogOut'

const Sidebar = () => {

    const [isModalLogOutActive, setIsModalLogOutActive] = useState<boolean>(false);

    // To navigate other parte of the app
    const location = useLocation();
    const navigate = useNavigate();

    // Routes
    const toDoctors = location.pathname && `doctors`;
    const toPatients = location.pathname && `patients`
    const toAppointments = location.pathname && `appointments`

    const handleOnModalLogOut = () => {
        setIsModalLogOutActive(true)
    }

    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="Image Name" />
                <h2>Admin</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuList grid">
                    <li className="listItem">
                        <a onClick={() => navigate(toDoctors, { replace: true })} className="menuLink flex">
                            <FaUserMd className='icon' />
                            <span className="smallText">
                                Doctors
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a onClick={() => navigate(toPatients, { replace: true })} className="menuLink flex">
                            <FaUserAlt className='icon' />
                            <span className="smallText">
                                Patients
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a onClick={() => navigate(toAppointments, { replace: true })} className="menuLink flex">
                            <HiOutlineClipboardList className='icon' />
                            <span className="smallText">
                                Appointments
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a onClick={handleOnModalLogOut} className="menuLink flex">
                            <BiLogOut className='icon' />
                            <span className="smallText">
                                Log Out
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            {isModalLogOutActive && <ModalLogOut setModalState={setIsModalLogOutActive} />}
        </div>
    )
}
export default Sidebar