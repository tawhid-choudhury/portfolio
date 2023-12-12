'use client';
import hh1 from "../assets/homehive/all-devices-black.png"
import hh2 from "../assets/homehive/dashboard.png"
import hh3 from "../assets/homehive/Vite + Reactpng (3).png"
import hh4 from "../assets/homehive/Vite + Reactpng (4).png"

import { Carousel } from 'flowbite-react';

export default function HomeHiveSS() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[200px] sm:w-[250px] xl:w-[480px] 2xl:w-[500px] bg-[#8fa5c3] rounded-lg">
            <Carousel slideInterval={5000}>
                <img src={hh1} alt="..." />
                <img src={hh2} alt="..." />
                <img src={hh3} alt="..." />
                <img src={hh4} alt="..." />
            </Carousel>
        </div>
    );
}
