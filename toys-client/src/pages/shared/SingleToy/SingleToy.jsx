import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ toy, myToys, handleDeleteToy }) => {

    const { name, picture, seller, price, available, subCategory, _id } = toy

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-28 h-28">
                            <Link to={`/toyDetails/${_id}`}>
                                <img src={picture} alt={name} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">
                            <Link to={`/toyDetails/${_id}`}>
                                {name}
                            </Link>
                        </div>
                    </div>
                </div>
            </td>
            <td className='capitalize'>
                ${price}
            </td>
            <td className='capitalize'>
                {subCategory}
            </td>
            <td>
                {
                    seller || ''
                }
            </td>
            <td>
                {
                    available
                }
            </td>
            <th>
                {
                    myToys ?
                        <div className='flex gap-5'>
                            <Link to={`/updateToy/${_id}`}>
                                <button className="btn btn-md btn-outline hover:bg-[#4acdd5] hover:border-[#4acdd5]">
                                    Update
                                </button>
                            </Link>
                            <button onClick={()=> handleDeleteToy(_id)} className="btn btn-md btn-outline hover:bg-[#4acdd5] hover:border-[#4acdd5]">
                                Remove
                            </button>
                        </div>
                        :
                        <Link to={`/toyDetails/${_id}`}>
                            <button className="btn btn-md btn-outline hover:bg-[#4acdd5] hover:border-[#4acdd5]">
                                View Details
                            </button>
                        </Link>
                }
            </th>
        </tr>
    );
};

export default SingleToy;