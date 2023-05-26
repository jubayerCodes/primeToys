import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const TabCard = ({ toy }) => {
    const { picture, name, price, rating, _id } = toy
    return (
        <div className="card w-full bg-base-100 shadow-xl duration-200 hover:scale-105">
            <figure><img src={picture} alt="cars" className='w-full h-[280px]' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/toyDetails/${_id}`}>
                        <button className="btn tab-btn btn-md px-6 mt-5 bg-[#4acdd5] border-[#4acdd5]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TabCard;