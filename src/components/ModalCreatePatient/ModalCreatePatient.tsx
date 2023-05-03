import './modalCreatePatient.css'

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
}

const ModalCreatePatient = ({ setModalState, onRefresh }: Props) => {
  const token = useSelector((state: any) => state.user.idToken)

  const [inputs, setInputs] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  useEffect(() => {

    const createPatient = async (displayName: string, email: string, password: string) => {
      let data = {
        displayName: displayName,
        email: email,
        password: password,
      }

      try {
        const req = await fetch('http://localhost:3000/admin/patients/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

          }
        });

        const res = await req.json();
        onRefresh();
      } catch (error) {
        console.error(error)
      }

    }

    createPatient(inputs.displayName, inputs.email, inputs.password)
  }, [inputs])

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { displayName: "", email: "", password: "" } });

  const handleFormSubmit = (e: any) => {
    console.log(e)

    setInputs({
      displayName: e.displayName,
      email: e.email,
      password: e.password,
    })
    setTimeout(() => {
      setModalState(false)
    }, 100);

  };

  const handleModalClose = () => {
    setModalState(false)
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Create a Patient</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="Input-boxSignIn">
              <label htmlFor="displayName">Name</label><br />
              <input type="text" {...register('displayName', { required: true })} />
              {errors.displayName?.type === 'required' && <p className='alert' role="alert">Name is required!</p>}
            </div>
            <div className="Input-boxSignIn">
              <label htmlFor="email">Email</label><br />
              <input type="email" {...register('email', { required: true })} />
              {errors.email?.type === 'required' && <p className='alert' role="alert">Email is required!</p>}
            </div>
            <div className="Input-boxSignIn">
              <label htmlFor="password">Password</label><br />
              <input type="password" {...register('password', { required: true })} />
              {errors.password?.type === 'required' && <p className='alert' role="alert">Password is required!</p>}
            </div>
            <div className="bttns">
              <button id='cancelBttn' onClick={handleModalClose}>Cancel</button>
              <button type='submit'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalCreatePatient;