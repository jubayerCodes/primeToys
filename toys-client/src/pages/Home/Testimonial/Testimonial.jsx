import React from 'react';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';
import Aos from 'aos';

Aos.init()

const Testimonial = () => {
    return (
        <section className='py-20 lg:py-32 px-5'>
            <div className="my-container">
                <h2 className="section-title text-center">
                    Customer Saying
                </h2>
                <h5 className="mini-title text-center">
                    Customer Testimonials
                </h5>
                <div data-aos="zoom-in" className="mt-12 w-full flex justify-center">
                    <TestimonialCarousel></TestimonialCarousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;