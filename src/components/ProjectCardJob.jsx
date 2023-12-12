'use client';
import { Button, List } from 'flowbite-react';
import { Link } from 'react-router-dom';

import JobFinderSS from './JobFinderSS';


const ProjectCardJob = () => {


    return (
        <div>
            <p className="pb-4 pt-4 text-center text-[#1caee8] text-3xl md:text-3xl">2. JOBFINDERSYL - An Online Job Hunting Platform</p>
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="max-w-2xl text-justify">
                    <p className="text-lg font-roboto font-light text-[#1caee8]">Tech Stack: Vite, React, Daisy UI, Tailwind CSS, NodeJs, ExpressJs.</p>
                    <p className="text-lg font-roboto font-light text-[#8d8a7a]">Explore the LiveLink and repositories to dive into the world of job opportunities with JOBFINDERSYL! 🌐🔍
                    </p>
                    <List>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Developed an innovative online job hunting platform using Vite and React.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Utilized React-router-dom for smooth navigation and a user-friendly experience.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Employed Daisy UI and Tailwind CSS for a sleek and responsive design.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Built a robust back-end with NodeJs and ExpressJs to handle job data and user interactions.</List.Item>
                        <List.Item className="text-lg font-roboto font-light text-[#8d8a7a]">Ensured secure user authentication through JWT for a seamless login experience.</List.Item>
                    </List>

                    <div className='pt-4 flex items-center justify-center w-full'>
                        <Link to='https://jobfindersyl.web.app/'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Live Link</Button></Link>
                        <Link to='https://github.com/tawhid-choudhury/job-finder-client'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Client Repo</Button></Link>
                        <Link to='https://github.com/tawhid-choudhury/job-finder-server'><Button className='bg-opacity-0 border-2 border-[#8d8a7a] w-full text-[#8d8a7a]'>Server Repo</Button></Link>
                    </div>

                </div>
                <div>
                    <div className="w-[100%] h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <JobFinderSS />
                    </div>

                </div>

            </div>




        </div>
    );
};

export default ProjectCardJob;