import React from 'react';
import { FaRegMeh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <section className='h-[100vh] flex justify-center items-center'>
            <div className="my-container">
                <div className='flex flex-col items-center'>
                    <span className='flex justify-center items-center text-[220px] gap-8 text-[#4acdd5] font-semibold -mb-8'>
                        4
                        <FaRegMeh className='-mt-3 text-[200px]'></FaRegMeh>
                        4
                    </span>
                    <p className="section-desc text-xl">
                        Sorry, But the page you are looking for doesn't exist!
                    </p>

                    <Link to="/">
                        <button className="login-btn mt-10 text-xl">
                            go to home
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Page404;