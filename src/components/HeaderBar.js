import useState, { useRef } from "react";
import Category from "../UI/Category";

const HeaderBar = props => {


    return (
        <Wrapper>
            <Card>
                <ul>
                    <li><a href="javascript:;" data-anchor={props.anchorId.aboutMe}>About Me</a></li>
                    <li><a href="javascript:;" data-anchor={propsanchorId.experience}>Experience</a></li>
                    <li><a href="javascript:;" data-anchor={propsanchorId.skill}>Experience</a></li>
                    <li><a href="javascript:;" data-anchor={propsanchorId.project}>Experience</a></li>
                </ul>
            </Card>
        </Wrapper>
    )
}

export default HeaderBar;
