import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useTitle } from '../../utilities/customHooks/useTitle';

const Login = () => {

    useTitle('Login')

    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(() => {
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(err => {
                console.log(err.message);
                if (err.message === 'Firebase: Error (auth/wrong-password).') {
                    Swal.fire({
                        title: 'Ops! Wrong Password!',
                        text: 'Please enter correct password.',
                        icon: 'error',
                        confirmButtonText: 'Retry'
                    })
                }

                if (err.message === 'Firebase: Error (auth/user-not-found).') {
                    Swal.fire({
                        title: 'Ops! Email Not Found!',
                        text: 'Please enter correct email.',
                        icon: 'error',
                        confirmButtonText: 'Retry'
                    })
                }
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err.message))
    }

    return (
        <section className="login-section py-40">
            <div className="login-container w-[700px] mx-auto bg-[#F3F3F3] p-10 rounded-xl">
                <h2 className="section-title text-center mb-5">
                    Login
                </h2>
                <p className="section-desc text-center">
                    Please login using account detail bellow.
                </p>
                <form className="form mt-6 w-full" onSubmit={handleLogin}>
                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="email" placeholder='Email' id='email-field' name='email' />
                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="password" placeholder='Password' id='password-field' name='password' />
                    {/* <label className='inline-block my-4 hover:underline'>
                        Forgot Password?
                    </label> */}
                    <div className="form-btn-grp mt-2">
                        <button className="login-btn" type='submit'>
                            Login
                        </button>
                        <button className="login-btn ml-5" type='button' onClick={handleGoogleSignIn}>
                            Google
                        </button>
                    </div>
                    <label>
                        New to PrimeToys? <Link to="/register" className='text-[#FF6799] hover:underline mt-5 inline-block'>Register.</Link>
                    </label>
                </form>
            </div>
        </section>
    );
};

export default Login;