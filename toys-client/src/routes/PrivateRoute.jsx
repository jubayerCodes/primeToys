import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className='w-full mx-auto flex justify-center my-12'>
                <ThreeCircles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor="#FF6799"
                    innerCircleColor="#FF6799"
                    middleCircleColor="#FF6799"
                />
            </div>
        )
    }

    if (!user) {
        Swal.fire(
            'Please Login!',
            'You have to log in first to view.',
            'warning'
        )
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return children
};

export default PrivateRoute;