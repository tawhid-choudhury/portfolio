import banner from "../assets/Colored Shapes.svg"

const Banner = () => {
    return (
        <div className="w-full h-[100vh]">
            <img src={banner} className="w-full h-full" alt="" />
        </div>
    );
};

export default Banner;