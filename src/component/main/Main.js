import FirstSection from "./include/first/FirstSection";
import Header from "./include/Header";
import SecondSection from "./include/second/SecondSection";
import style from './Main.module.scss'

import { Section } from './Style'

const Main = ({ theme }) => {
    
    return (
        <div>
            {/* header */}
            <Header theme={ theme }/>

            {/* Main */}
            <Section name='MAIN'>
                {/* 첫번째 섹션 */}
                <FirstSection theme={ theme }/>
            </Section>

            <Section name='ABOUT' theme={ theme }>
                <SecondSection theme={ theme }/>
            </Section>

            <Section name='CONTENTS'>

            </Section>

            <Section name='CONTACT'>

            </Section>
        </div>
    );
};

export default Main;