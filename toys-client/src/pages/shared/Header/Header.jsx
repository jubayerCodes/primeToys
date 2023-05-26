import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const [dropdown, serDropdown] = useState(false)

    const menu = (
        <>
            <li><ActiveLink to="/">Home</ActiveLink></li>
            <li><ActiveLink to="/toys">All Toys</ActiveLink></li>
            {
                user ?
                    <>
                        <li><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                        <li><ActiveLink to="/addToy">Add Toy</ActiveLink></li>
                    </>
                    :
                    <></>
            }
            <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>
        </>
    )

    const handleLogOut = () => {
        logOut()
    }

    return (
        <header className="header">
            <div className="header-container my-container py-5 px-2">
                <div className="navbar bg-white">
                    <div className="navbar-start">
                        <Link to="/" className='text-2xl lg:text-4xl font-bold text-[#4acdd5]'>
                            Prime<span className='text-[#FF6799]'>Toys</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="header-user-mobile lg:hidden flex gap-5 items-center">
                            <div className="user-img">
                                {
                                    user?.photoURL ?
                                        <>
                                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className='w-[50px] h-[50px] rounded-full cursor-pointer' src={user?.photoURL} alt="" />

                                            <Tooltip id="my-tooltip" />
                                        </>
                                        :
                                        <FaUserCircle style={{ fontSize: '50px', color: '#FF6799', cursor: 'pointer' }}></FaUserCircle>
                                }
                            </div>

{/* Drop Down Should update in Future */}

                            <div className="header-btn">
                                <div className="dropdown dropdown-end">
                                    <label className="btn btn-circle swap bg-[#FF6799] border-[#FF6799] hover:bg-[#FF6799] hover:border-[#FF6799]">

                                        <input type="checkbox" onChange={() => serDropdown(!dropdown)} />

                                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                    </label>
                                    <ul className={`${dropdown ? 'flex' : 'hidden'} duration-300 dropdown-content menu p-2 shadow bg-[#4acdd5] rounded-box w-[360px] mt-5`}>
                                        <li><ActiveLink to="/">Home</ActiveLink></li>
                                        <li><ActiveLink to="/toys">All Toys</ActiveLink></li>
                                        {
                                            user ?
                                                <>
                                                    <li><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                                                    <li><ActiveLink to="/addToy">Add Toy</ActiveLink></li>
                                                </>
                                                :
                                                <></>
                                        }
                                        <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>

                                        {
                                            user ?
                                                <button className="btn rounded-full bg-[#FF6799] border-[#FF6799] w-full hover:bg-[#4acdd5] hover:border-white" onClick={handleLogOut}>Logout</button>
                                                :
                                                <Link to="/login">
                                                    <button className="btn rounded-full bg-[#FF6799] border-[#FF6799] w-full hover:bg-[#4acdd5] hover:border-white">Login</button>
                                                </Link>
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="header-user hidden lg:flex gap-5 items-center">
                            <div className="user-img">
                                {
                                    user?.photoURL ?
                                        <>
                                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className='w-[50px] h-[50px] rounded-full cursor-pointer' src={user?.photoURL} alt="" />

                                            <Tooltip id="my-tooltip" />
                                        </>
                                        :
                                        <FaUserCircle style={{ fontSize: '50px', color: '#FF6799', cursor: 'pointer' }}></FaUserCircle>
                                }
                            </div>
                            <div className="header-btn">
                                {
                                    user ?
                                        <button className="login-btn" onClick={handleLogOut}>Logout</button>
                                        :
                                        <Link to="/login">
                                            <button className="login-btn">Login</button>
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;