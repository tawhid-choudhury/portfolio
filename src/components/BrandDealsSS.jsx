'use client';
import jj1 from "../assets/brand/all-devices-white (1).png"
import jj2 from "../assets/brand/Vite + Reactpng (5).png"
import jj3 from "../assets/brand/Vite + Reactpng (6).png"

import { Carousel } from 'flowbite-react';

export default function BrandDealsSS() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[200px] sm:w-[250px] xl:w-[480px] 2xl:w-[500px] rounded-lg">
            <Carousel slideInterval={5000}>
                <img src={jj1} alt="..." />
                <img src={jj3} alt="..." />
                <img src={jj2} alt="..." />
            </Carousel>
        </div>
    );
}
