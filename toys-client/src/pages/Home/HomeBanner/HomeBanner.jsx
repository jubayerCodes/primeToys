import React from 'react';
import heroImg from '../../../assets/image/hero.webp'

const HomeBanner = () => {
    return (
        <section className="home-banner" >
            <div className="hero py-32 lg:py-64 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 w-full justify-between">
                    <div className="card max-w-sm shadow-2xl bg-base-100">
                    </div>
                    <div className="text-center lg:text-left">
                        <h4 className='bg-[#FF6799] inline-block py-4 px-8 italic font-semibold text-2xl lg:text-3xl capitalize mb-5 text-white'>Hey there</h4>
                        <h1 className="font-bold uppercase text-5xl lg:text-6xl text-[#4acdd5]" style={{lineHeight: '1.3'}}>
                            premium toys for you
                        </h1>
                        <button className="banner-btn mt-10">
                            shop now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;