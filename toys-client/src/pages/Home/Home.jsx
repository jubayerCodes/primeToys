import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import Gallery from './Gallery/Gallery';
import SubCategories from './SubCategories/SubCategories';
import { useHomeTitle } from '../../utilities/customHooks/useTitle';
import Testimonial from './Testimonial/Testimonial';
import VideoSection from './VideoSection/VideoSection';
import FeaturedToys from './FeaturedToys/FeaturedToys';
import BeforeAfter from './BeforeAfter/BeforeAfter';

const Home = () => {
    useHomeTitle()
    return (
        <>
            <HomeBanner></HomeBanner>
            <SubCategories></SubCategories>
            <Gallery></Gallery>
            <FeaturedToys />
            <VideoSection></VideoSection>
            <Testimonial></Testimonial>
            <BeforeAfter />
        </>
    );
};

export default Home;