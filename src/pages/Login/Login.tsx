// Import React Stuff
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import loginImg from '../../assets/LoginAssets/loginImg.jpg'


import './index.css';

const Login = () => {

    // Stuff to control the form
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { email: "", password: "" } });


    // To navigate other parte of the app
    const location = useLocation();
    const navigate = useNavigate();

    // State variables
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    // Routes
    const toSettingsView = location.pathname && `/settingsView`;

    // Handlers
    const handleFormSubmit = async (e: any) => {
        setInputs({
            email: e.email,
            password: e.password
        })

        try {
            // navigate(toSettingsView, { replace: true })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Wrapper">
            <div className="login__img-container">
                <img src={loginImg} alt="" className='login__img' />
            </div>
            <div className="WrapperForm">
                <form onSubmit={handleSubmit(handleFormSubmit)}>

                    <h2>Login</h2>
                    <div className="Input-box">
                        <span className="Icon">
                            <i className='bx bxs-envelope' ></i>
                        </span>
                        <input type="email" placeholder='Email' {...register('email', { required: true })} />
                    </div>
                    <div className="Input-box">
                        <span className="Icon">
                            <i className='bx bxs-lock-alt'></i>
                        </span>
                        <input type="password" placeholder='Password' {...register('password', { required: true })} />
                    </div>
                    <div className="Forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>
                    <div className="Register-link">
                        <p>Don't have an account? <a href='/signInView'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login