import React, { useEffect, useState } from 'react';
import TabCard from '../TabCard/TabCard';
import ToyCard from '../../../components/ToyCard/ToyCard';

const FeaturedToys = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://toys-server-amber.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data.slice(0, 3))
            })
    }, [])

    return (
        <section className='py-20 lg:py-32 bg-[#FAFAFA] px-5'>
            <div className="my-container">
                <h2 className="section-title text-center">
                    Customer Loves
                </h2>
                <h5 className="mini-title text-center">
                    Popular Product
                </h5>
                <div data-aos="zoom-in" className="mt-12 w-full flex justify-center">
                    <div className={`content w-full grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-12 `}>
                        {
                            toys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedToys;