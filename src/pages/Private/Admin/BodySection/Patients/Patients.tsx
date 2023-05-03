import './patients.css'

import { HiUserAdd } from 'react-icons/hi'
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card } from './Components';
import { ModalCreatePatient } from '../../../../../components/ModalCreatePatient';

const Patients = () => {

    const token = useSelector((state: any) => state.user.idToken)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [patientList, setPatientList] = useState<any>();

    const getPatientList = async () => {
        const req = await fetch('http://localhost:3000/admin/patients/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            }
        );
        const res = await req.json();
        setPatientList(res.success)
        console.log(res.success)
    }

    const getList = useCallback(() => {
        getPatientList().catch(console.error);
    }, [])


    useEffect(() => {
        getList()
    }, [getList])

    const handleOnOpenModal = () => {
        setIsModalOpen(true)
    }

    const list: any = patientList?.map((patient: any) =>
        <Card key={patient.patient_id} id={patient.patient_id} name={patient.patient_name} onRefresh={getList} />
    )

    return (

        <div className="cardSection">
            <div className="heading flex">
                <h1>Patients</h1>
                <button onClick={handleOnOpenModal} className="bttn flex">
                    Add a patient
                    <HiUserAdd className='icon' />
                </button>
            </div>

            <div className="secContainer flex">
                {list}
            </div>
            {isModalOpen && <ModalCreatePatient onRefresh={getList} setModalState={setIsModalOpen} />}
        </div>

    )
}
export default Patients