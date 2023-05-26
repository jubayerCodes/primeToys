import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../utilities/customHooks/useTitle';

const ToyDetails = () => {

    useTitle('Toy Details')

    const toy = useLoaderData()

    const { name, picture, seller, rating, price, available, subCategory, _id, sellerEmail, description } = toy

    return (
        <section className="details-banner" >
            <div className="hero py-24 my-container">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 w-full gap-6 items-start justify-between">
                    <div className="card">
                        <img src={picture} alt="" className='rounded-lg'/>
                    </div>
                    <div className="lg:text-left">
                        <h2 className='text-4xl font-semibold mb-5'>
                            {name}
                        </h2>
                        <h3 className='text-xl mb-2'>
                            Price: ${price}
                        </h3>
                        <h3 className='text-xl mb-2'>
                            In Stock: {available}
                        </h3>
                        <h3 className='text-xl mb-2'>
                            Seller: {seller}
                        </h3>
                        <h3 className='text-xl mb-2'>
                            Seller Email: {sellerEmail}
                        </h3>
                        <div>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                                className='my-5'
                            />
                        </div>
                        <p className='section-desc mb-2'>
                            <b>Toy Description:</b> {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;