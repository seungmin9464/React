import FirstSection from "./include/FirstSection";
import Header from "./include/Header";

import style from './Main.module.scss'

import { Section } from './style'

const Main = ({ theme }) => {
    
    return (
        <div>
            {/* header */}
            <Header theme={ theme }/>

            {/* Main */}
            <Section>
                {/* 첫번째 섹션 */}
                <FirstSection theme={ theme }/>
            </Section>

            <Section>

            </Section>

            <Section>

            </Section>
        </div>
    );
};

export default Main;