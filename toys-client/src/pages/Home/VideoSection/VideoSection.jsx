import React from 'react';
import videoImg from '../../../assets/image/video.webp'
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VideoSection = () => {
    return (
        <section className="video-section pt-0 lg:py-28 lg:pb-10 px-5 lg:px-16">
            <div className="video-container text-center rounded-xl lg:w-full h-[600px] mx-auto flex flex-col justify-center items-center px-5 bg-center bg-cover" style={{ backgroundImage: `url(${videoImg})` }}>
                <h2 className="text-white text-2xl lg:text-5xl mb-10 font-bold lg:px-[500px]" style={{ lineHeight: '1.5' }}>
                    We make your children happier
                    with the best toys
                </h2>
                <Link to="https://www.youtube.com/watch?v=MLpWrANjFbI&pp=ygURcGxhY2Vob2xkZXIgdmlkZW8%3D" target='_blank'>
                    <FaPlay className='text-white text-6xl cursor-pointer hover:text-[#4acdd5] duration-300'></FaPlay>
                </Link>
            </div>
        </section>
    );
};

export default VideoSection;