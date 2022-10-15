import { useRef, useState } from "react";


import PortfolioPage from "./Page/Home/PortfolioHome";
import AboutMePage from "../AboutMe/AboutMePage";
import SkillPage from "../Skill/SkillPage";
import ExperiencePage from "../Experience/ExperiencePage";
import ProjectPage from "../Project/ProjectPage";
import Wrapper from "../../Happer/Wrapper";
import Card from "../../UI/Card";
import HeaderBar from "../../components/HeaderBar";




const HomePage = () => {

    const anchorId = [{
        aboutMe : "anchor_AboutMePage",
        experience : "anchor_ExperiencePage",
        skill : "anchor_SkillPage",
        project : "anchor_ProjectPage",

}]

    return (
        <Wrapper>
            <HeaderBar anchorId={anchorId} ></HeaderBar>
            <Card>
                <AboutMePage id="anchor_AboutMePage"></AboutMePage>
                <SkillPage id="anchor_SkillPage"></SkillPage>
                <ExperiencePage id="anchor_ExperiencePage"></ExperiencePage>
                <ProjectPage id="anchor_ProjectPage"></ProjectPage>
            </Card>
        </Wrapper>
    )
}

export default HomePage;