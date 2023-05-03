import './card.css'

import userLogo from '../../../../../../assets/userLogo.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ModalUpdatePatient } from '../../../../../../components/ModalUpdatePatient';

type Props = {
    id: number;
    name: string;
    onRefresh: () => void;
}

const Card = ({ id, name, onRefresh }: Props) => {
    const token = useSelector((state: any) => state.user.idToken)

    const [isUpdateModalActive, setIsUpdateModalActive] = useState<boolean>(false);

    const handleOnDelete = async () => {
        try {
            await fetch(`http://localhost:3000/admin/patients/${id}`, {
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
            <div className="bttns">
                <button id='deleteBttn' onClick={handleOnDelete}>Delete</button>
                <button onClick={handleOnUpdate}>Update</button>
            </div>
            {isUpdateModalActive && <ModalUpdatePatient onRefresh={onRefresh} setModalState={setIsUpdateModalActive} id={id} name={name} />}
        </div>
    )
}
export default Card