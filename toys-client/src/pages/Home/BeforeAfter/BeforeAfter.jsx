import React, { useEffect, useState } from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import before from '../../../assets/image/before.jpg'
import after from '../../../assets/image/after.jpg'

const BeforeAfter = () => {

    const [width, setWidth] = useState(0)

    useEffect(() => {

        const initialWidth = document.querySelector('.beforeAfter-container').offsetWidth

        setWidth(initialWidth)

        window.addEventListener('resize', () => {
            const newWidth = document.querySelector('.beforeAfter-container').offsetWidth
            setWidth(newWidth)
        })

    }, [])

    return (
        <section className='py-20 px-5 xl:px-16'>
            <div className="beforeAfter-container w-full">
                <BeforeAfterSlider
                    before={before}
                    after={after}
                    width={width}
                    height={480}
                />
            </div>
        </section>
    );
};

export default BeforeAfter;