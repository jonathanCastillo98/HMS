import './card.css'

import userLogo from '../../../../../../assets/userLogo.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ModalUpdateDoctor } from '../../../../../../components/ModalUpdateDoctor';

type Props = {
    id: number;
    name: string;
    department: string;
    departmentid: number;
    onRefresh: () => void;
}

const Card = ({ id, name, department, departmentid, onRefresh }: Props) => {
    const token = useSelector((state: any) => state.user.idToken)

    const [isUpdateModalActive, setIsUpdateModalActive] = useState<boolean>(false);

    const handleOnDelete = async () => {
        try {
            await fetch(`http://localhost:3000/admin/doctors/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            onRefresh()
        } catch (error) {
            console.error(error)
        }
    }

    const handleOnUpdate = () => {
        setIsUpdateModalActive(true)
    }
    return (
        <div className="singleItem">
            <img src={userLogo} alt="User Image" />
            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Department: {department}</h3>
            <div className="bttns">
                <button id='deleteBttn' onClick={handleOnDelete}>Delete</button>
                <button onClick={handleOnUpdate}>Update</button>
            </div>
            {isUpdateModalActive && <ModalUpdateDoctor onRefresh={onRefresh} setModalState={setIsUpdateModalActive} id={id} name={name} department={department} departmentId={departmentid} />}
        </div>
    )
}
export default Card