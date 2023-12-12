import Heading from "../components/Heading";
import pic from "../assets/49411124_536161316889971_7199137801172942848_n.jpg"
import Marquee from "react-fast-marquee";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { Timeline } from 'flowbite-react';

const AboutMe = () => {
    return (
        <div>
            <Heading title="About me"></Heading>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
                <div className="max-w-md text-justify">
                    <p className="text-lg font-roboto font-light text-[#8d8a7a]">Hello! I am Tawhid, a recent Computer Science and Technology graduate from BRAC University, Bangladesh. Eager to forge my path in the digital realm, I have set my sights on becoming a skilled web developer.

                        Embarking on a journey into the world of React and the MERN Stack, I am dedicated to mastering the intricacies of web development. From front-end enchantment with React to delving into the depths of MongoDB, Express.js, and Node.js, I am on a mission to craft robust and dynamic web solutions.

                        Equipped with a solid academic foundation and a hunger for knowledge, I am enthusiastic about embracing challenges and staying on the cutting edge of technology. My passion for coding is fueled by the belief that great software can change the world.</p>
                </div>
                <div>
                    <div className="max-w-md overflow-hidden">
                        <img className="w-full h-full object-cover" src={pic} alt="" />
                    </div>
                </div>

            </div>
            <Heading subtitle="Key Technologies That I Use:"></Heading>
            <div className="max-w-5xl m-auto">
                <div className="">
                    <Marquee>
                        <div className="flex justify-around items-center gap-10">
                            <div className="text-base text-center text-[#8d8a7a]">HTML5<span className="text-6xl"><FaHtml5 /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">CSS3<span className="text-6xl"><IoLogoCss3 /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">JavaScript<span className="text-6xl"><IoLogoJavascript /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">Tailwindcss<span className="text-6xl"><SiTailwindcss /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">React<span className="text-6xl"><FaReact /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">MongoDB<span className="text-6xl"><SiMongodb /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">NodeJs<span className="text-6xl"><FaNodeJs /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">ExpressJs<span className="text-6xl"><SiExpress /></span></div>
                            <div className="text-base text-center text-[#8d8a7a]">Firebase<span className="text-6xl"><IoLogoFirebase /></span></div>

                        </div>
                    </Marquee>
                </div>
            </div>
            <Heading subtitle="Educational Background:"></Heading>
            <div className="max-w-lg m-auto">
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time className="font-roboto font-light text-[#8d8a7a]">2018-2023</Timeline.Time>
                            <Timeline.Title className="font-roboto font-normal text-gray-700">Bachelor of Science in Computer Science and Engineering</Timeline.Title>
                            <Timeline.Body className="font-roboto font-light text-[#8d8a7a]">
                                BRAC University, Dhaka, Bangladesh <br /> Result: CGPA 3.73 out of 4.00
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time className="font-roboto font-light text-[#8d8a7a]">2018</Timeline.Time>
                            <Timeline.Title className="font-roboto font-normal text-gray-700">Higher Secondary School Certificate
                            </Timeline.Title>
                            <Timeline.Body className="font-roboto font-light text-[#8d8a7a]">
                                Scholarshome, Shahi Eidgah, Sylhet, Bangladesh <br /> Result: GPA 4.25 out of 5.00
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time className="font-roboto font-light text-[#8d8a7a]">2016</Timeline.Time>
                            <Timeline.Title className="font-roboto font-normal text-gray-700">Secondary School Certificate</Timeline.Title>
                            <Timeline.Body className="font-roboto font-light text-[#8d8a7a]">
                                Blue Bird School and College, Sylhet, Bangladesh <br /> Result: GPA 4.67 out of 5.00
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    );
};

export default AboutMe;