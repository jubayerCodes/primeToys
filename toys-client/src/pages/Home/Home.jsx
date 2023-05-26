import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import Gallery from './Gallery/Gallery';
import SubCategories from './SubCategories/SubCategories';
import { useHomeTitle } from '../../utilities/customHooks/useTitle';
import Testimonial from './Testimonial/Testimonial';
import VideoSection from './VideoSection/VideoSection';

const Home = () => {
    useHomeTitle()
    return (
        <>
            <HomeBanner></HomeBanner>
            <SubCategories></SubCategories>
            <Gallery></Gallery>
            <VideoSection></VideoSection>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;