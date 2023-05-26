import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaRegMap, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const { user } = useContext(AuthContext)

    const menu = (
        <>
            <li className='inline-block'><Link className='hover:text-[#FF6799]' to="/">Home</Link></li>
            <li className='inline-block'><Link className='hover:text-[#FF6799]' to="/toys">All Toys</Link></li>
            {
                user ?
                    <>
                        <li className='inline-block'><Link className='hover:text-[#FF6799]' to="/myToys">My Toys</Link></li>
                        <li className='inline-block'><Link className='hover:text-[#FF6799]' to="/addToy">Add Toy</Link></li>
                    </>
                    :
                    <></>
            }
            <li className='inline-block'><Link className='hover:text-[#FF6799]' to="/blogs">Blogs</Link></li>
        </>
    )

    return (
        <footer>
            <div className='bg-[#FAFAFA] px-5 lg:px-0'>
                <div className='my-container grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-20'>
                    <div>
                        <Link to="/" className='text-4xl font-bold text-[#4acdd5] mb-5 lg:mb-8 inline-block'>
                            Prime<span className='text-[#FF6799]'>Toys</span>
                        </Link>
                        <p className="section-desc">
                            A kids toy shop is a store that specializes in selling toys and games designed specifically for children.
                        </p>
                    </div>
                    <div className=' lg:pl-8'>
                        <h4 className='text-xl font-semibold mb-3 lg:mb-8'>
                            Quick Links
                        </h4>
                        <ul className='flex flex-col gap-2'>
                            {menu}
                        </ul>
                    </div>
                    <div>
                        <h4 className=' text-xl font-semibold mb-3 lg:mb-8'>
                            Information
                        </h4>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-5 items-center lg:items-start'>
                                <FaMapMarkerAlt className='text-2xl lg:text-3xl text-[#FF6799]'></FaMapMarkerAlt>
                                <p className="section-desc">
                                    <b>Address:</b> 1800 Abbot Kinney Nebraska UK
                                </p>
                            </div>
                            <div className='flex gap-5 items-center lg:items-start'>
                                <FaRegEnvelope className='text-2xl lg:text-3xl text-[#FF6799]'></FaRegEnvelope>
                                <p className="section-desc">
                                    <b>Email:</b> hello@example.com
                                </p>
                            </div>
                            <div className='flex gap-5 items-center lg:items-start'>
                                <FaPhoneAlt className='text-2xl lg:text-3xl text-[#FF6799]'></FaPhoneAlt>
                                <p className="section-desc">
                                    <b>Phone:</b> (012) 345 6789
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:pl-8'>
                        <h4 className=' text-xl font-semibold mb-3 lg:mb-8'>
                            Social Links
                        </h4>
                        <div className='flex gap-5'>
                            <Link to="#">
                                <FaFacebook className='text-4xl duration-300 text-[#3586ff] hover:text-[#FF6799]'></FaFacebook>
                            </Link>
                            <Link to="#">
                                <FaTwitter className='text-4xl duration-300 text-[#62a1ff] hover:text-[#FF6799]'></FaTwitter>
                            </Link>
                            <Link to="#">
                                <FaInstagram className='text-4xl duration-300 text-[#ff5f02] hover:text-[#FF6799]'></FaInstagram>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FF6799] text-lg py-8 px-5 w-full'>
                <h4 className=' text-center text-white'>
                    Copyright PrimeToys | Design & Developed By <span className='font-bold'>
                        Jubayer Hossain
                    </span>
                </h4>
            </div>
        </footer>
    );
};

export default Footer;