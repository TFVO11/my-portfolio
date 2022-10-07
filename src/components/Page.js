import { useRef, useState } from "react";


import PortfolioPage from "./Page/Home/PortfolioHome";
import AboutMePage from "../Page/AboutMe/AboutMePage";
import SkillPage from "../Page/Skill/SkillPage";
import ExperiencePage from "../Page/Experience/ExperiencePage";
import ProjectPage from "../Page/Project/ProjectPage";
import Wrapper from "../../Happer/Wrapper";
import Card from "../../UI/Card";




const Page = () => {
    const handleScroll = () => {
        portfolio.current.focus();
    };



    const portfolio = useRef();
    const aboutMe = useRef();
    const skills = useRef();
    const experience = useRef();
    const project = useRef();


    return (
        <Wrapper>
            <Card>
                <PortfolioPage ref={portfolio}></PortfolioPage>
                <AboutMePage ref={aboutMe}></AboutMePage>
                <SkillPage ref={skills}></SkillPage>
                <ExperiencePage ref={experience}></ExperiencePage>
                <ProjectPage ref={project}></ProjectPage>
            </Card>
        </Wrapper>
    )
}

export default Page;