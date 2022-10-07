import PortfolioPage from "./Page/Home/PortfolioHome";
import AboutMePage from "../Page/AboutMe/AboutMePage";
import SkillPage from "../Page/Skill/SkillPage";
import ExperiencePage from "../Page/Experience/ExperiencePage";
import ProjectPage from "../Page/Project/ProjectPage";
import Wrapper from "../../Happer/Wrapper";
import Card from "../../UI/Card";




const Page = () => {
    return (
        <Wrapper>
            <Card>
                <PortfolioPage></PortfolioPage>
                <AboutMePage></AboutMePage>
                <SkillPage></SkillPage>
                <ExperiencePage></ExperiencePage>
                <ProjectPage></ProjectPage>
            </Card>
        </Wrapper>
    )
}

export default Page;