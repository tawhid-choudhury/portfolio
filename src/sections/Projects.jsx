import Heading from "../components/Heading";
import ProjectCardBrand from "../components/ProjectCardBrand";
import ProjectCardHomeHive from "../components/ProjectCardHomeHive";
import ProjectCardJob from "../components/ProjectCardJob";

const Projects = () => {
    return (
        <div className="bg-[#151b28]">
            <Heading className="text-[#8fa5c3]" title={"Projects"}></Heading>
            <ProjectCardHomeHive></ProjectCardHomeHive>
            <ProjectCardJob></ProjectCardJob>
            <ProjectCardBrand></ProjectCardBrand>
        </div>
    );
};

export default Projects;