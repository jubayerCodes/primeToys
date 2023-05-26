import React from "react"
import { useKeenSlider } from "keen-slider/react"
import testimonial1 from "../../../assets/image/testimonial-1.webp"
import testimonial2 from "../../../assets/image/testimonial-2.webp"
import testimonial3 from "../../../assets/image/testimonial-3.webp"
import testimonial4 from "../../../assets/image/testimonial-4.webp"
import { Rating } from '@smastrom/react-rating';

const TestimonialCarousel = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 30
        },
        loop: true,
        breakpoints: {
            '(max-width: 720px)': {
                slides:{
                    perView: 1
                }
            }
        }
    })

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <div className="slide bg-[#FAFAFA] w-full p-12 rounded-tl-[60px] rounded-br-[60px]">
                    <div className='flex gap-8 items-center mb-5'>
                        <img src={testimonial1} className='w-[60px] h-[60px] rounded-full' alt="" />
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>Ader Militao</h4>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4}
                                readOnly
                            />
                        </div>
                    </div>
                    <p className="section-desc">
                        The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.
                    </p>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1">
                <div className="slide bg-[#FAFAFA] w-full p-12 rounded-tl-[60px] rounded-br-[60px]">
                    <div className='flex gap-8 items-center mb-5'>
                        <img src={testimonial2} className='w-[60px] h-[60px] rounded-full' alt="" />
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>Alex Benjamin</h4>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.5}
                                readOnly
                            />
                        </div>
                    </div>
                    <p className="section-desc">
                        The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.
                    </p>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1">
                <div className="slide bg-[#FAFAFA] w-full p-12 rounded-tl-[60px] rounded-br-[60px]">
                    <div className='flex gap-8 items-center mb-5'>
                        <img src={testimonial3} className='w-[60px] h-[60px] rounded-full' alt="" />
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>Andrea</h4>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4}
                                readOnly
                            />
                        </div>
                    </div>
                    <p className="section-desc">
                        The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.
                    </p>
                </div>
            </div>
            <div className="keen-slider__slide number-slide1">
                <div className="slide bg-[#FAFAFA] w-full p-12 rounded-tl-[60px] rounded-br-[60px]">
                    <div className='flex gap-8 items-center mb-5'>
                        <img src={testimonial4} className='w-[60px] h-[60px] rounded-full' alt="" />
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>Matt Henry</h4>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={5}
                                readOnly
                            />
                        </div>
                    </div>
                    <p className="section-desc">
                        The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCarousel