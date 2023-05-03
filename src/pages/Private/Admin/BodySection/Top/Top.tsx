import './top.css'

import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'

import adminImage from '../../../../../assets/userLogo.png'

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to the Admin Section</h1>
                    <p>Hello Jonathan, Welcome back!</p>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon" />
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="adminImage">
                        <img src={adminImage} alt="Admin Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top