'use client';
import jj1 from '../assets/JobFinder/all-devices-white.png'
import jj0 from '../assets/JobFinder/Job Finder   All Jobspng.png'
import jj2 from '../assets/JobFinder/Job Finder   blogspng.png'
import jj3 from '../assets/JobFinder/Job Finder   Sign Uppng.png'

import { Carousel } from 'flowbite-react';

export default function JobFinderSS() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[200px] sm:w-[250px] xl:w-[480px] 2xl:w-[500px] rounded-lg">
            <Carousel slideInterval={5000}>
                <img src={jj1} alt="..." />
                <img src={jj0} alt="..." />
                <img src={jj3} alt="..." />
                <img src={jj2} alt="..." />
            </Carousel>
        </div>
    );
}
