import './doctors.css'

import { Card } from './Components'

import { HiUserAdd } from 'react-icons/hi'
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalCreateDoctor } from '../../../../../components/ModalCreateDoctor';

const Doctors = () => {

    const token = useSelector((state: any) => state.user.idToken)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [doctorList, setDoctorList] = useState<any>();

    const getJedisList = async () => {
        const req = await fetch('http://localhost:3000/admin/doctors/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            }
        );
        const res = await req.json();
        setDoctorList(res.success)
        console.log(res.success)
    }

    const getList = useCallback(() => {
        getJedisList().catch(console.error);
    }, [])


    useEffect(() => {
        getList()
    }, [getList])

    const handleOnOpenModal = () => {
        setIsModalOpen(true)
    }

    const docList: any = doctorList?.map((doctor: any) =>
        <Card key={doctor.doctor_id} id={doctor.doctor_id} name={doctor.doctor_name} department={doctor.Department.department} onRefresh={getList} departmentId={doctor.doctor_id} />
    )

    return (

        <div className="cardSection">
            <div className="heading flex">
                <h1>Doctors</h1>
                <button onClick={handleOnOpenModal} className="bttn flex">
                    Add a doctor
                    <HiUserAdd className='icon' />
                </button>
            </div>

            <div className="secContainer flex">
                {docList}
            </div>
            {isModalOpen && <ModalCreateDoctor onRefresh={getList} setModalState={setIsModalOpen} />}
        </div>

    )
}
export default Doctors