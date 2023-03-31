import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';

const PrivateViewTest = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const toLoginView = location.pathname && `/`;
    const handleOnLogOut = () => {
        window.localStorage.removeItem("token")
        navigate(toLoginView, { replace: true })

    }

    return (
        <>
            <div>PrivateViewTest</div>
            <button onClick={handleOnLogOut}>Log Out</button>
        </>
    )
}

export default PrivateViewTest