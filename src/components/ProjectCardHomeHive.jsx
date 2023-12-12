'use client';
import { Button, List } from 'flowbite-react';
import { Link } from 'react-router-dom';

import HomeHiveSS from './HomeHiveSS';


const ProjectCardHomeHive = () => {


    return (
        <div>
            <p className="pb-4 pt-4 text-center text-[#1caee8] text-3xl md:text-3xl">1. HOMEHIVE - Real Estate Marketplace</p>
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="max-w-2xl text-justify">
                    <p className="text-lg font-roboto font-light text-[#1caee8]">Tech Stack: React, React-router, Daisy UI, Tailwind CSS, NodeJs, ExpressJs.</p>
                    <p className="text-lg font-roboto font-light text-[#8d8a7a]">Explore the LiveLink and repositories to witness the synergy of cutting-edge technologies in revolutionizing the real estate experience with HomeHive! 🏡✨
                    </p>
                    <List>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Crafted a responsive React.js interface for HomeHive, enhancing user experience across devices.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Implemented a versatile dashboard system catering to various user types.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Leveraged Framer Motion for captivating animations on the home page.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Ensured user authenticity using JWT cookies for secure authentication.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Employed React Router DOM to create a seamless single-page web application.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Integrated Stripe API, offering users a frictionless and secure payment system.</List.Item>
                    </List>

                    <div className='pt-4 flex items-center justify-center w-full'>
                        <Link to='https://homehive-84c83.web.app/'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Live Link</Button></Link>
                        <Link to='https://github.com/tawhid-choudhury/home-hive-Real-estate-website-client'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Client Repo</Button></Link>
                        <Link to='https://github.com/tawhid-choudhury/home-hive-Real-estate-website-server'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Server Repo</Button></Link>
                    </div>

                </div>
                <div>
                    <div className="w-[100%] h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <HomeHiveSS></HomeHiveSS>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default ProjectCardHomeHive;