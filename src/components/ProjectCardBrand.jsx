'use client';
import { Button, List } from 'flowbite-react';
import { Link } from 'react-router-dom';

import JobFinderSS from './JobFinderSS';
import BrandDealsSS from './BrandDealsSS';


const ProjectCardBrand = () => {


    return (
        <div>
            <p className="pb-4 pt-4 text-center text-[#1caee8] text-3xl md:text-3xl">3. BRANDDEALS - An Online Branded Dealership</p>
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="max-w-2xl text-justify">
                    <p className="text-lg font-roboto font-light text-[#1caee8]">Tech Stack: React, React-router-dom, Daisy UI, Tailwind, Express, NodeJs.</p>
                    <p className="text-lg font-roboto font-light text-[#8d8a7a]">Explore the LiveLink and repositories to experience the world of branded deals with BRANDDEALS! 🚗✨
                    </p>
                    <List>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Developed BRANDDEALS, an innovative online platform for branded dealership.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Utilized Vite and React to create a responsive and dynamic user interface.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Incorporated React-router-dom for seamless navigation and user-friendly interactions.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Styled the application with Daisy UI and Tailwind CSS, ensuring a sleek and modern design.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Implemented a robust back-end using NodeJs and ExpressJs to handle dealership data and user interactions.</List.Item>
                    </List>

                    <div className='pt-4 flex items-center justify-center w-full'>
                        <Link to='https://branddealsa10.web.app/'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Live Link</Button></Link>
                        <Link to='https://github.com/tawhid-choudhury/brand-deals-client'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Client Repo</Button></Link>
                        <Link to='https://github.com/tawhid-choudhury/brand-deals-server'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Server Repo</Button></Link>
                    </div>

                </div>
                <div>
                    <div className="w-[100%] h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <BrandDealsSS />
                    </div>

                </div>

            </div>




        </div>
    );
};

export default ProjectCardBrand;