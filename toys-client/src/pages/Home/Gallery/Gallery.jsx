import React from 'react';
import gallery1 from '../../../assets/image/gallery-1.webp'
import gallery5 from '../../../assets/image/gallery-5.webp'
import gallery6 from '../../../assets/image/gallery-6.webp'
import gallery8 from '../../../assets/image/gallery-8.webp'

const Gallery = () => {
    return (
        <section className="gallery-section py-20 lg:py-28 px-5 lg:px-16">
            <div className="gallery-container text-center">
                <h2 className="section-title">
                    recent photoshoot
                </h2>
                <h5 className="mini-title">
                    check gallery
                </h5>
                <div className="gallery-images grid grid-cols-1 items-center gap-10 lg:grid-cols-4 mt-16">
                    <img className='hover:scale-105 duration-300 rounded-lg' src={gallery5} alt="" />
                    <img className='hover:scale-105 duration-300 rounded-lg h-[550px] w-full' src={gallery6} alt="" />
                    <img className='hover:scale-105 duration-300 rounded-lg' src={gallery1} alt="" />
                    <img className='hover:scale-105 duration-300 rounded-lg h-[550px] w-full' src={gallery8} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;