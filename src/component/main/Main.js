import FirstSection from "./include/first/FirstSection";
import Header from "./include/Header";
import SecondSection from "./include/second/SecondSection";
import style from './Main.module.scss'

import { Section } from './Style'

const Main = ({ isDarkMode, toggleDarkMode, chanege }) => {
    
    return (
        <div>
            {/* header */}
            <Header
                chanege={ chanege }
                isDarkMode={ isDarkMode } 
                toggleDarkMode={ toggleDarkMode }
            />

            {/* Main */}
            <Section name='MAIN' chanege={ chanege }>
                {/* 첫번째 섹션 */}
                <FirstSection chanege={ chanege }/>
            </Section>

            <Section name='ABOUT' chanege={ chanege } isDarkMode={ isDarkMode }>
                <SecondSection chanege={ chanege } isDarkMode={ isDarkMode }/>
            </Section>

            <Section name='CONTENTS' chanege={ chanege }>

            </Section>

            <Section name='CONTACT' chanege={ chanege }>

            </Section>
        </div>
    );
};

export default Main;