import useState, { useRef } from "react";
import Category from "../UI/Category";

const HeaderBar = () => {
const [, ] = useState();

    const handleClick = () => {

    };

    return (
        <Wrapper>
            <Category onClick={handleClick}>Portfolio</Category>
            <Category>About me</Category>
            <Category>skills</Category>
            <Category>Experience</Category>
            <Category>Project</Category>
        </Wrapper>
    )
}

export default HeaderBar;