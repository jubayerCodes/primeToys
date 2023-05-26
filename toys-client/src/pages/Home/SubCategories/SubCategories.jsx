import React, { useEffect, useState } from 'react';
import TabsContainer from '../TabsContainer/TabsContainer';
import Aos from 'aos';
Aos.init()

const SubCategories = () => {

    const [toys, setToys] = useState([])
    const [subCategories, setSubCategories] = useState([])

    const [activeTab, setActiveTab] = useState('')

    // console.log(toys);

    useEffect(() => {
        fetch(`https://toys-server-amber.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                const subCategories = Array.from(new Set(data?.map((toy) => toy.subCategory)));
                setSubCategories(subCategories)
                setActiveTab(subCategories[0])
            })
    }, [])

    return (
        <section className='py-20 lg:py-32 bg-[#FAFAFA] px-5'>
            <div className="my-container">
                <h2 className="section-title text-center">
                    We love trends
                </h2>
                <h5 className="mini-title text-center">
                    sub categories
                </h5>
                <div data-aos="zoom-in" className="mt-12 w-full flex justify-center">
                    <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab} toys={toys} subCategories={subCategories} />
                </div>
            </div>
        </section>
    );
};

export default SubCategories;