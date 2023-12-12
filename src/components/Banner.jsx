import { Button } from "flowbite-react";
import banner from "../assets/Colored Patterns.svg";
import pic from "../assets/Screenshot 2023-12-12 004das631.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative w-full min-h-[80vh] bg-cover bg-center">
            <div className="absolute inset-0">
                <img src={banner} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="absolute top-0 flex flex-col-reverse md:flex-row items-center h-full justify-center w-full gap-6 bg-[#151b28] bg-opacity-70">
                <div className="text-center md:text-left space-y-5 max-w-md md:max-w-lg lg:max-w-xl">
                    <h5 className="text-[#8fa5c3] text-lg md:text-2xl font-mono ">Hi there! I am ...</h5>
                    <h1 className="text-[#1caee8] text-2xl md:text-5xl font-normal font-roboto">Tawhid Al Muhaimin Choudhury</h1>
                    <h5 className="text-[#8fa5c3] text-lg md:text-2xl font-roboto font-light ">I am a passionate frontend developer who likes to craft quality and scalable websites</h5>
                    <Link to="https://drive.google.com/file/d/1VpAJpQGMCx6Yobsenl_Q7oFpUBvT6N_C/view?usp=sharing">
                        <Button className="bg-[#1caee8] mt-3">Download Resume</Button>
                    </Link>
                </div>
                <div className="rounded-full overflow-hidden border-[5px] p-5 border-[#1caee8]">
                    <div className="rounded-full overflow-hidden">
                        <img src={pic} className="w-32 h-32 md:w-48 md:h-48" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
