import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useTitle } from '../../utilities/customHooks/useTitle';

const Register = () => {

    useTitle('Register')

    const { signUp, setUserUpdate, userUpdate } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if(password.length < 8){
            setPasswordError(true)
            return
        }

        signUp(email, password)
            .then((res) => {
                const user = res.user
                updateUser(user, name, photo)
                    .then(() => {
                        setUserUpdate(!userUpdate)
                        form.reset()
                    })
            })
            .catch(error => {
                console.log(error.message)

                if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                    Swal.fire({
                        title: 'Ops! Email already exist!',
                        text: 'Please enter another email.',
                        icon: 'error',
                        confirmButtonText: 'Retry'
                      })
                }
            })
    }

    const updateUser = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    return (
        <section className="register-section py-40">
            <div className="register-container w-[700px] mx-auto bg-[#F3F3F3] p-10 rounded-xl">
                <h2 className="section-title text-center mb-5">
                    Register
                </h2>
                <p className="section-desc text-center">
                    Please Register using account detail bellow.
                </p>
                <form onSubmit={handleRegister} className="form mt-6 w-full">
                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="text" placeholder='Name' id='name-field' name='name' />

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="text" placeholder='Photo' id='photo-field' name='photo' />

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="email" placeholder='Email' id='email-field' name='email' />

                    <input required className='w-full mb-4 text-lg p-2 rounded-md' type="password" placeholder='Password' id='password-field' name='password' />
                    <label className={`${passwordError ? 'inline-block' : 'hidden'} mb-5`}>
                        * Password should contain at least 8 characters.
                    </label>
                    <div className="form-btn-grp mt-2">
                        <button className="login-btn" type='submit'>
                            Create
                        </button>
                    </div>
                    <label>
                        Have Account? <Link to="/login" className='text-[#FF6799] hover:underline mt-5 inline-block'>Login.</Link>
                    </label>
                </form>
            </div>
        </section>
    );
};

export default Register;